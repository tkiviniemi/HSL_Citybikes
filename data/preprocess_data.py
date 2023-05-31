import pandas as pd

may_df = pd.read_csv('2021-05.csv')
june_df = pd.read_csv('2021-06.csv')
july_df = pd.read_csv('2021-07.csv')
stations_df = pd.read_csv('Helsingin_ja_Espoon_kaupunkipyöräasemat_avoin.csv')


# Remove journeys with null values
may_df = may_df.dropna()
june_df = june_df.dropna()
july_df = july_df.dropna()

# Remove journeys that lasted less than 10 seconds
may_df.drop(may_df[may_df['Duration (sec.)'] < 10].index, inplace=True)
june_df.drop(june_df[june_df['Duration (sec.)'] < 10].index, inplace=True)
july_df.drop(july_df[july_df['Duration (sec.)'] < 10].index, inplace=True)

# Remove journeys that covered less than 10 meters
may_df.drop(may_df[may_df['Covered distance (m)'] < 10].index, inplace=True)
june_df.drop(june_df[june_df['Covered distance (m)'] < 10].index, inplace=True)
july_df.drop(july_df[july_df['Covered distance (m)'] < 10].index, inplace=True)

# Combine all journey data into a single dataframe 
journeys_df = pd.concat([may_df, june_df, july_df])

# Remove duplicate rows
journeys_df.drop_duplicates(inplace=True)

# Refactor column names, replace spaces with underscores
journeys_df.columns = ['departure_time', 'return_time', 'departure_station_id', 'departure_station_name',
                       'return_station_id', 'return_station_name', 'covered_distance', 'duration']

# Drop 'Operaattor' column, doesn't have data for most of the stations, FID is just an obsolete id
stations_df.drop(columns=['FID', 'Operaattor'], inplace=True)

# Rename columns so everything is in english
stations_df.columns = ['station_id', 'name_fi' , 'name_sv', 'name_en', 'address_fi', 'address_sv', 
                       'city_fi', 'city_sv', 'capacity', 'long', 'lat']

# All stations that aren't in Espoo are in Helsinki, fill the blanks with Helsinki
stations_df['city_fi'].replace(' ', 'Helsinki', inplace=True)
stations_df['city_sv'].replace(' ', 'Helsingfors', inplace=True)


## Write dataframes to files in database folder
journeys_df.to_csv('../db/journey_data.csv', index=False)
stations_df.to_csv('../db/station_data.csv', index=False)