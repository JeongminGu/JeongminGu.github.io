const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (128 spp)",
                    "version": "-",
                    "image": "images/hair_input.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/hair_kpcn.png"
                },
                {
                    "title": "PD (KPCN)",
                    "version": "-",
                    "image": "images/hair_pd_kpcn.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/hair_js_kpcn.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/hair_afgsa.png"
                },
                {
                    "title": "DC (AFGSA)",
                    "version": "-",
                    "image": "images/hair_dc_afgsa.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/hair_js_afgsa.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/hair_gt.png"
                }
            ],
        },
    ],
    "stats": [
        {
            "labels": [
                "PT",
                "KPCN",
                "PD (KPCN)",
                "Ours (KPCN)",
                "AFGSA",
                "DC (AFGSA)",
                "Ours (AFGSA)", 
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "128",
                        "128",
                        "124",
                        "124",
                        "128",
                        "128",
                        "126"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "280.0",
                        "283.6",
                        "278.5",
                        "275.9",
                        "280.0",
                        "280.5",
                        "276.0"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.01906",
                        "0.01190",
                        "0.00987",
                        "0.00422",
                        "0.01522",
                        "0.01420",
                        "0.00424"
                    ]
                }
            ]
        }

    ]
}

