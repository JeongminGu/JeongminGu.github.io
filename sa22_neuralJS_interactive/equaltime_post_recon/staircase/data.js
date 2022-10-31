const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (16 spp)",
                    "version": "-",
                    "image": "images/staircase_input.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/staircase_kpcn.png"
                },
                {
                    "title": "DC (KPCN)",
                    "version": "-",
                    "image": "images/staircase_dc_kpcn.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/staircase_js_kpcn.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/staircase_afgsa.png"
                },
                {
                    "title": "PD (AFGSA)",
                    "version": "-",
                    "image": "images/staircase_pd_afgsa.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/staircase_js_afgsa.png"
                },
                {
                    "title": "Reference (16K spp)",
                    "version": "-",
                    "image": "images/staircase_gt.png"
                }
            ],
        },
    ],
    "stats": [
        {
            "labels": [
                "PT",
                "KPCN",
                "DC (KPCN)",
                "Ours (KPCN)",
                "AFGSA",
                "PD (AFGSA)",
                "Ours (AFGSA)", 
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "16",
                        "16",
                        "12",
                        "14",
                        "16",
                        "16",
                        "14"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "9.0",
                        "12.6",
                        "12.7",
                        "12.5",
                        "9.0",
                        "9.0",
                        "8.3"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.38333",
                        "0.00606",
                        "0.00423",
                        "0.00311",
                        "0.00530",
                        "0.00793",
                        "0.00359"
                    ]
                }
            ]
        }

    ]
}

