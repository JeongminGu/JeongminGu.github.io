const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (64 spp)",
                    "version": "-",
                    "image": "images/veach_input.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/veach_kpcn.png"
                },
                {
                    "title": "PD (KPCN)",
                    "version": "-",
                    "image": "images/veach_pd_kpcn.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/veach_js_kpcn.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/veach_afgsa.png"
                },
                {
                    "title": "DC (AFGSA)",
                    "version": "-",
                    "image": "images/veach_dc_afgsa.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/veach_js_afgsa.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/veach_gt.png"
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
                        "64",
                        "64",
                        "56",
                        "56",
                        "64",
                        "64",
                        "62"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "16.0",
                        "19.3",
                        "20.6",
                        "18.2",
                        "16.0",
                        "16.5",
                        "15.9"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "1.37751",
                        "0.01495",
                        "0.01706",
                        "0.00657",
                        "0.00877",
                        "0.01037",
                        "0.00531"
                    ]
                }
            ]
        }

    ]
}

