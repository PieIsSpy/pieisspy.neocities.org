import requests
import json

def get_data(mon, gen, game):
    response = requests.get("https://pokeapi.co/api/v2/pokemon/" + mon).json()
    
    query = {
        "pokemon": mon,
        "sprite": response['sprites']['versions'][gen][game]['front_default'],
        "cry": response['cries']['latest']
    }

    print(query)

    return query

def get_team(query):
    for member in query['team']:
        yield get_data(member, query['generation'], query['game'])

def main():
    queries = [
        {
            "game": "emerald",
            "generation": "generation-iii",
            "team": [
                "swampert",
                "gardevoir",
                "sableye",
                "crobat",
                "hariyama",
                "manectric"
            ]
        },

        {
            "game": "firered-leafgreen",
            "generation": "generation-iii",
            "team": [
                "venusaur",
                "dodrio",
                "nidoking",
                "snorlax",
                "lapras",
                "jolteon"
            ]
        }
    ]

    result = []

    team1 = list(get_team(queries[0]))
    result.append(team1)

    team2 = list(get_team(queries[1]))
    result.append(team2)

    output = json.dumps(result, indent=4)
    print(output)

    with open("src/_data/hall-of-fame.json", "w") as f:
        f.write(output)

main()