const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (512 spp)",
                    "version": "-",
                    "image": "images/glass_input.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/glass_kpcn.png"
                },
                {
                    "title": "DC (KPCN)",
                    "version": "-",
                    "image": "images/glass_dc_kpcn.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/glass_js_kpcn.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/glass_afgsa.png"
                },
                {
                    "title": "PD (AFGSA)",
                    "version": "-",
                    "image": "images/glass_pd_afgsa.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/glass_js_afgsa.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/glass_gt.png"
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
                        "512",
                        "518",
                        "512",
                        "512",
                        "512",
                        "512",
                        "508"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "68.8",
                        "72.9",
                        "73.9",
                        "73.0",
                        "68.8",
                        "68.8",
                        "68.7"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.02887",
                        "0.01735",
                        "0.01009",
                        "0.00667",
                        "0.02240",
                        "0.00736",
                        "0.00685"
                    ]
                }
            ]
        }

    ]
}

