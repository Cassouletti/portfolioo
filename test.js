<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excel Projects</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="mediaqueries.css">
    <link rel="stylesheet" href="./python/default.min.css">
    <style>
        body {
            background-image: url(./assets/greenclouds.png);
        }
    </style>
</head>
<body>
    <nav id="desktop-nav">
        <div class="logo">Léa Bensoussan</div>
        <div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="excel.html">Excel</a></li>
                <li><a href="python.html">Python</a></li>
                <li><a href="powerbi.html">Power Bi</a></li>
            </ul>
        </div>
    </nav>
    <nav id="hamburger-nav">
        <div class="logo">Léa Bensoussan</div>
        <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-links">
                <li><a href="index.html" onclick="toggleMenu()">Home</a></li>
                <li><a href="excel.html" onclick="toggleMenu()">Excel</a></li>
                <li><a href="python.html" onclick="toggleMenu()">Python</a></li>
                <li><a href="powerbi.html" onclick="toggleMenu()">Power Bi</a></li>
            </div>
        </div>
    </nav>
    <h1 class="title">1.</h1>
    <section id="about">
        <p class="section__text__p1">Project</p>
        <h1 class="title">Absenteeism</h1>
        <div class="section-container">
            <div class="about-details-container">
                <div class="about-containers2">
                    <div class="details-container">
                        <h3>Introduction</h3>
                        <p class="justify-align some-paragraph"><br>Dans ce projet, j'ai analysé un jeu de données sur l'<b>absentéisme au travail</b> en utilisant Python, afin de comprendre les facteurs qui influencent l'absentéisme et d'en tirer des <b><i>insights</i></b> pertinents.
                        </p>
                    </div>
                </div>
                <p class="justify-align some-paragraph b"><br>Avant de procéder l'analyse, un <b><i>prétraitement</i></b> minutieux des données a été effectué.</p>
                <p class="justify-align some-paragraph b"><br>Une fois les <i>données nettoyées et préparées</i>, j'ai réalisé une <b>analyse préparatoire</b> avec plusieurs <b>visualisations</b> pour explorer les <i>relations entre les variables</i> et identifier les <i>tendances clés</i>.</p>
            </div>
        </div>
        <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='#ch'"
        />
    </section>

    <section id="ch">
        <h2 class="subtitle">Nettoyage et Préparation des données</h2>
        <br>
        <div class="section-container">
            <div class="about-details-container">
                <div>
                    <p class="justify-align some-paragraph">
                        <div class="num" data-number="1"><h3>Chargement des modules et données</h3></div>
                    </p>
                </div>
                <pre>
                    <code>import pandas as pd
                    import numpy as np

                    import matplotlib.pyplot as plt
                    import seaborn as sns
                    data = data.drop("ID", axis = 1)
                </code>
            </pre>
        </div>
    </div>
    <img
    src="./assets/arrow.png"
    alt="Arrow icon"
    class="icon arrow"
    onclick="location.href='#dashboard'"
    />
</section>

<section id="recommendations" class = "recommendations">
    <p class="section__text__p1">Explore my</p>
    <h1 class="title">Recommendations</h1>
    <div class="about-containers2">
        <div class="details-container">
            <ul class="b justify-align">
                <li><b>Promotions en octobre</b> : Organiser des soldes sur l'électroménager en octobre pour profiter du pic de ventes observé durant ce mois.</li><br>
                <li><b>Ciblage des segments porteurs </b> : La téléphonie a enregistré une forte croissance des ventes dans la succursale 2, tandis que l'informatique a stagné. Pour capitaliser sur ce succès et la tendance générale, il serait judicieux de lancer des promotions ou des offres spéciales sur la téléphonie et l'informatique à partir de 2029 dans toutes les succursales.</li><br>
                <li><b>Adaptation des promotions</b> : Ajuster les promotions en fonction de la localisation de chaque point de vente, des tendances mensuelles et des besoins et envies des consommateurs à ces moments précis pour maximiser l'efficacité des stratégies de vente.</li>
            </ul>
        </div>
    </div>
    <br><br>
    <p class="section__text__p1">Full project on github</p>
    <div class="contact-info-container">
        <img
        src="./assets/github.png"
        alt="My Github profile"
        class="icon"
        onclick="location.href='https://github.com/'"
        />
        <p><a href="mailto:bensoussanleaai@gmail.com">Bensoussanleaai@gmail.com</a></p>
    </div>
    <div class="btn-container">
        <button class="btn btn-color-1" onclick="location.href='excel2.html'">
            Next project
        </button>
    </div>
    <br>
    <br>
    <br>
</section>

<pre>
    <code>
        function toggleMenu() {
            var menu = document.querySelector('.menu-links');
            menu.classList.toggle('active');
        }
    </code>
</pre>
<script src="./python/highlight.min.js"></script>
<script>
    hljs.highlightAll();
</script>
</body>
</html>