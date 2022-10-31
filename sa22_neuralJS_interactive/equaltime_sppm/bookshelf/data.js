const data =
{
    "imageBoxes": [
        {
            "title": "Equal-time comparisons of our techinique with BDPT and SPPM",
            "elements": [
                {
                    "title": "BDPT (121.0 s)",
                    "version": "-",
                    "image": "images/bookshelf_bdpt.png"
                },
                {
                    "title": "SPPM (121.0 s)",
                    "version": "-",
                    "image": "images/bookshelf_sppm.png"
                },
                {
                    "title": "Ours (120.4 s)",
                    "version": "-",
                    "image": "images/bookshelf_js.png"
                },
                {
                    "title": "Reference (64K spp)",
                    "version": "-",
                    "image": "images/bookshelf_ref.png"
                }
            ]
        },
    ],
    "stats": [
        {
            "labels": [
                "BDPT",
                "SPPM",
                "Ours",
            ],
            "series": [
				{
                    "label": "time (s)",
                    "data": [
                        "121.0",
                        "121.0",
                        "120.4"
                    ]
                },
                {
                    "label": "relative L2",
                    "data": [
                        "0.00661",
                        "0.08584",
                        "0.00180"
                    ]
                }
            ]
        }

    ]
}