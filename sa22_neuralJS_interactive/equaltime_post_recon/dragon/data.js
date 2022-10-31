const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (64 spp)",
                    "version": "-",
                    "image": "images/dragon2_input.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/dragon2_kpcn.png"
                },
                {
                    "title": "DC (KPCN)",
                    "version": "-",
                    "image": "images/dragon2_dc_kpcn.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/dragon2_js_kpcn.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/dragon2_afgsa.png"
                },
                {
                    "title": "PD (AFGSA)",
                    "version": "-",
                    "image": "images/dragon2_pd_afgsa.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/dragon2_js_afgsa.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/dragon2_gt.png"
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
                        "64",
                        "64",
                        "60",
                        "60",
                        "64",
                        "64",
                        "60"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "40.9",
                        "44.5",
                        "44.3",
                        "43.0",
                        "40.9",
                        "40.9",
                        "38.8"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.06241",
                        "0.02596",
                        "0.02118",
                        "0.01303",
                        "0.03591",
                        "0.01826",
                        "0.01416"
                    ]
                }
            ]
        }

    ]
}

