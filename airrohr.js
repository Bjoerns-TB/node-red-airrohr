[
    {
        "id": "a89bc4ca.9f7d08",
        "type": "tab",
        "label": "Airrohr"
    },
    {
        "id": "92d0e723.9964e8",
        "type": "inject",
        "z": "a89bc4ca.9f7d08",
        "name": "Timer 1 min",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "60",
        "crontab": "",
        "once": true,
        "x": 119,
        "y": 41,
        "wires": [
            [
                "d9d510f8.18f93"
            ]
        ]
    },
    {
        "id": "963ebf53.6bb39",
        "type": "ui_gauge",
        "z": "a89bc4ca.9f7d08",
        "name": "",
        "group": "1d6dbe70.1a1ce2",
        "order": 1,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Temperatur",
        "label": "°C",
        "format": "{{value}}",
        "min": "-40",
        "max": "80",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "25",
        "seg2": "30",
        "x": 663.5,
        "y": 24,
        "wires": []
    },
    {
        "id": "e48767b9.c5ab28",
        "type": "ui_gauge",
        "z": "a89bc4ca.9f7d08",
        "name": "",
        "group": "1d6dbe70.1a1ce2",
        "order": 2,
        "width": "3",
        "height": "3",
        "gtype": "gage",
        "title": "Luftfeuchtigkeit",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 674.5,
        "y": 59,
        "wires": []
    },
    {
        "id": "ad00153b.c21148",
        "type": "ui_chart",
        "z": "a89bc4ca.9f7d08",
        "name": "",
        "group": "1d6dbe70.1a1ce2",
        "order": 5,
        "width": "12",
        "height": "6",
        "label": "PM10",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "12",
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 645.5,
        "y": 96,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "4cbd3f98.aee54",
        "type": "ui_chart",
        "z": "a89bc4ca.9f7d08",
        "name": "",
        "group": "1d6dbe70.1a1ce2",
        "order": 6,
        "width": "12",
        "height": "6",
        "label": "PM2.5",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 647.5,
        "y": 162,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "323c3c03.3693d4",
        "type": "ui_text",
        "z": "a89bc4ca.9f7d08",
        "group": "1d6dbe70.1a1ce2",
        "order": 3,
        "width": "3",
        "height": "1",
        "name": "",
        "label": "PM10",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 645.5,
        "y": 129,
        "wires": []
    },
    {
        "id": "fa63f3a6.6333b",
        "type": "ui_text",
        "z": "a89bc4ca.9f7d08",
        "group": "1d6dbe70.1a1ce2",
        "order": 4,
        "width": "3",
        "height": "1",
        "name": "",
        "label": "PM2.5",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 646.5,
        "y": 197,
        "wires": []
    },
    {
        "id": "d9d510f8.18f93",
        "type": "influxdb in",
        "z": "a89bc4ca.9f7d08",
        "influxdb": "c2d0ecc2.d68ba",
        "name": "Airrohr-DB",
        "query": "SELECT * FROM feinstaub ORDER BY time DESC LIMIT 1 ",
        "rawOutput": false,
        "precision": "",
        "retentionPolicy": "",
        "x": 302,
        "y": 41,
        "wires": [
            [
                "75e8fb71.e73774"
            ]
        ]
    },
    {
        "id": "75e8fb71.e73774",
        "type": "function",
        "z": "a89bc4ca.9f7d08",
        "name": "Seperator",
        "func": "var msg1 = {};\nvar msg2 = {};\nvar msg3 = {};\nvar msg4 = {};\nmsg1.payload = msg.payload[0].temperature;\nmsg2.payload = msg.payload[0].humidity;\nmsg3.payload = msg.payload[0].SDS_P1;\nmsg4.payload = msg.payload[0].SDS_P2;\nreturn [msg1,msg2,msg3,msg4];\n",
        "outputs": "4",
        "noerr": 0,
        "x": 471.5,
        "y": 41,
        "wires": [
            [
                "963ebf53.6bb39"
            ],
            [
                "e48767b9.c5ab28"
            ],
            [
                "ad00153b.c21148",
                "323c3c03.3693d4"
            ],
            [
                "4cbd3f98.aee54",
                "fa63f3a6.6333b"
            ]
        ]
    },
    {
        "id": "1d6dbe70.1a1ce2",
        "type": "ui_group",
        "z": "",
        "name": "Airrohr",
        "tab": "e6c459bd.048e78",
        "disp": true,
        "width": "24"
    },
    {
        "id": "c2d0ecc2.d68ba",
        "type": "influxdb",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "8086",
        "protocol": "http",
        "database": "airrohr",
        "name": "",
        "usetls": false,
        "tls": ""
    },
    {
        "id": "e6c459bd.048e78",
        "type": "ui_tab",
        "z": "",
        "name": "Airrohr",
        "icon": "dashboard",
        "order": 2
    }
]
