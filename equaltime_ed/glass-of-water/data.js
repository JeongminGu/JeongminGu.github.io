const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (118 spp)",
                    "version": "-",
                    "image": "images/glass_input.png"
                },
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/glass_nfor.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/glass_afgsa.png"
                },
                {
                    "title": "ED (PT, AFGSA)",
                    "version": "-",
                    "image": "images/glass_ED_afgsa_color.png"
                },
                {
                    "title": "ED (NFOR, AFGSA)",
                    "version": "-",
                    "image": "images/glass_ED_afgsa_nfor.png"
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
            ]
        },
    ],
    "stats": [
        {
            "labels": [
                "PT",
                "NFOR",
                "AFGSA",
                "ED (PT, AFGSA)",
                "ED (NFOR, AFGSA)",
                "Ours (AFGSA)"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "118",
                        "48",
                        "118",
                        "100",
                        "32",
                        "100"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "15.9",  // PT
                        "13.5",  // NFOR
                        "15.9",  // 
                        "15.5",  //
                        "13.3",  //                        
                        "13.3"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.11821",
                        "0.04813",
                        "0.02873",
                        "0.04617",
                        "0.02901",
                        "0.01700"
                    ]
                }
            ]
        }

    ],
}