const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (42 spp)",
                    "version": "-",
                    "image": "images/hair_input.png"
                },
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/hair_nfor.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/hair_kpcn.png"
                },
                {
                    "title": "ED (PT, KPCN)",
                    "version": "-",
                    "image": "images/hair_ED_kpcn_color.png"
                },
                {
                    "title": "ED (NFOR, KPCN)",
                    "version": "-",
                    "image": "images/hair_ED_kpcn_nfor.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/hair_js_kpcn.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/hair_gt.png"
                }
            ]
        },
    ],
    "stats": [
        {
            "labels": [
                "PT",
                "NFOR",
                "KPCN",
                "ED (PT, KPCN)",
                "ED (NFOR, KPCN)",
                "Ours (KPCN)"
            ],
            "series": [
				{
                    "label": "spp",
                    "data": [
                        "42",
                        "36",
                        "40",
                        "36",
                        "32",
                        "38"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "91.9",  // PT
                        "88.3",  // NFOR
                        "91.1",  // 
                        "91.9",  //
                        "92.6",  //                        
                        "87.7"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.05776",
                        "0.00893",
                        "0.01748",
                        "0.01917",
                        "0.01047",
                        "0.00830"
                    ]
                }
            ]
        }

    ],
}