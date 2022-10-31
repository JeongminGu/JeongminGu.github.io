const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (34 spp)",
                    "version": "-",
                    "image": "images/staircase_input.png"
                },
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/staircase_nfor.png"
                },
                {
                    "title": "AFGSA",
                    "version": "-",
                    "image": "images/staircase_afgsa.png"
                },
                {
                    "title": "ED (PT, AFGSA)",
                    "version": "-",
                    "image": "images/staircase_ED_afgsa_color.png"
                },
                {
                    "title": "ED (NFOR, AFGSA)",
                    "version": "-",
                    "image": "images/staircase_ED_afgsa_nfor.png"
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
                        "19.1",  // PT
                        "20.8",  // NFOR
                        "19.1",  // 
                        "20.3",  //
                        "20.8",  //                        
                        "18.4"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.17571",
                        "0.00465",
                        "0.00315",
                        "0.03774",
                        "0.00436",
                        "0.00199"
                    ]
                }
            ]
        }

    ],
}