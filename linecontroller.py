import json
from math import sqrt
from heapq import nsmallest
import numpy as np


def get_closest_cities(n: int, coordinates_to_choose_from: list, initial_coordinates):
    coordinates_to_choose_from.remove(initial_coordinates)
    initial_coordinates_arr = np.array(initial_coordinates)
    coordinates_to_choose_from_arr = np.array(coordinates_to_choose_from)
    distance_list = list()
    for i, c in enumerate(coordinates_to_choose_from_arr):
        distance_vector = c - initial_coordinates_arr
        distance = sqrt(distance_vector[0]**2 + distance_vector[1]**2)
        distance_list.append([distance, c])
    smallest_distances = nsmallest(n, distance_list, key= lambda dist_index_tuple: dist_index_tuple[0])
    return [list(smd[1]) for smd in smallest_distances]


# Define your coordinates using variables
coordinates_Hobart = [147.33838, -42.88239]
coordinates_Launceston = [147.13255, -41.43418]
coordinates_Melbourne = [144.93271, -37.84096]
coordinates_Sydney = [151.20951, -33.96790]
coordinates_Canberra = [149.19393, -35.30751]
coordinates_Adelaide = [138.48900,-34.77145]
coordinates_Perth = [115.76553,-32.23229]
coordinates_AliceSprings = [133.87316,-23.69717]
coordinates_Darwin = [130.88032,-12.41463]
coordinates_PortHedland = [118.62247,-20.37309]
coordinates_Cairns = [145.74899,-16.87862]
coordinates_Brisbane = [153.11733,-27.39266]

coordinates_cities = [coordinates_Hobart, coordinates_Launceston, coordinates_Melbourne,
                      coordinates_Sydney, coordinates_Canberra, coordinates_Adelaide, coordinates_AliceSprings,
                      coordinates_Perth, coordinates_Darwin, coordinates_PortHedland, coordinates_Cairns,
                      coordinates_Brisbane]
coordinate_pairs = []
for coordinates in coordinates_cities:
    sd = get_closest_cities(3, coordinates_cities.copy(), coordinates)
    for coords in sd:
        if [coordinates, coords] not in coordinate_pairs and [coords, coordinates] not in coordinate_pairs:
            coordinate_pairs.append([coordinates, coords])
    

# Create a dictionary representing the GeoJSON structure
features = [{"type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": coordinate_pair
            }} for coordinate_pair in coordinate_pairs]

geojson = {
    "type": "FeatureCollection",
    "features": features
}

# Save the GeoJSON data to a file
with open("lines.geojson", "w") as geojson_file:
    json.dump(geojson, geojson_file)
