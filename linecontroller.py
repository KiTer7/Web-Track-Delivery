import json

# Define your coordinates using variables
coordinates_Hobart = [10, 20]
coordinates_Launceston = [10, 10]
coordinates_Melbourne = [20, 20]
coordinates_Sydney = []
coordinates_Canberra = []


# Create a dictionary representing the GeoJSON structure
geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [coordinates_Hobart, coordinates_Launceston]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [coordinates_Hobart, coordinates_Melbourne]
            }
        }
        # Add more features as needed
    ]
}

# Save the GeoJSON data to a file
with open("lines.geojson", "w") as geojson_file:
    json.dump(geojson, geojson_file)
