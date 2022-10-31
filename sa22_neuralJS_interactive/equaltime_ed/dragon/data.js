const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (34 spp)",
                    "version": "-",
                    "image": "images/dragon_input.png"
                },
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/dragon_nfor.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/dragon_afgsa.png"
                },
                {
                    "title": "ED (PT, AFGSA)",
                    "version": "-",
                    "image": "images/dragon_ED_afgsa_color.png"
                },
                {
                    "title": "ED (NFOR, AFGSA)",
                    "version": "-",
                    "image": "images/dragon_ED_afgsa_nfor.png"
                },
                {
                    "title": "Ours (AFGSA)",
                    "version": "-",
                    "image": "images/dragon_js_afgsa.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/dragon_gt.png"
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
                        "34",
                        "20",
                        "34",
                        "32",
                        "16",
                        "32"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "21.7",  // PT
                        "22.3",  // NFOR
                        "21.7",  // 
                        "22.8",  //
                        "22.0",  //                        
                        "20.9"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.11773",
                        "0.03601",
                        "0.03839",
                        "0.03567",
                        "0.03485",
                        "0.02086"
                    ]
                }
            ]
        }

    ],
}