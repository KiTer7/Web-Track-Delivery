import json

# Define your coordinates using variables
coordinates_Hobart = [147.33838, -42.88239]
coordinates_Launceston = [147.13255, -41.43418]
coordinates_Melbourne = [144.93271, -37.84096]
coordinates_Sydney = [151.20951, -33.96790]
coordinates_Canberra = [149.19393, -35.30751]

coordinates = [[147.33838,-42.88239], [147.13255,-41.43418], [144.93271,-37.84096], [151.20951,-33.96790], [149.19393,-35.30751]]
coordinate_pairs = []
for coords in coordinates:
    temp_list = coordinates.copy()
    temp_list.remove(coords)
    for second_coords in temp_list:
        coordinate_pairs.append([coords, second_coords])
    coordinates.remove(coords)
    

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
