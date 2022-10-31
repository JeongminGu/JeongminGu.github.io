const data =
{
    "imageBoxes": [
        {
            "elements": [
                {
                    "title": "PT (84 spp)",
                    "version": "-",
                    "image": "images/veach_input.png"
                },
                {
                    "title": "NFOR",
                    "version": "-",
                    "image": "images/veach_nfor.png"
                },
                {
                    "title": "KPCN",
                    "version": "-",
                    "image": "images/veach_kpcn.png"
                },
                {
                    "title": "ED (PT, KPCN)",
                    "version": "-",
                    "image": "images/veach_ED_kpcn_color.png"
                },
                {
                    "title": "ED (NFOR, KPCN)",
                    "version": "-",
                    "image": "images/veach_ED_kpcn_nfor.png"
                },
                {
                    "title": "Ours (KPCN)",
                    "version": "-",
                    "image": "images/veach_kpcn_js.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/veach_gt.png"
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
                        "84",
                        "64",
                        "68",
                        "42",
                        "16",
                        "64"
                    ]
                },
                {
                    "label": "time (s)",
                    "data": [
                        "21.0",  // PT
                        "23.0",  // NFOR
                        "20.3",  // 
                        "22.4",  //
                        "22.9",  //                        
                        "20.2"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "1.09690",
                        "0.01495",
                        "0.01466",
                        "0.29112",
                        "0.03258",
                        "0.00637"
                    ]
                }
            ]
        }

    ],
}