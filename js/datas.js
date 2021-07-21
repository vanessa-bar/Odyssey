window.Odyssey = {};
Odyssey.class = {};

Odyssey.totalSteps = 15;
Odyssey.steps = [
	{
		name: "Troie", markerOrientation: 'left', 
		html: `<b>Dix ans !</b> Voilà dix ans que les rois grecs et leurs valeureux soldats ont quitté leurs terres, répondant à l’appel à la guerre des frères <b>Ménélas</b> et <b>Agamemnon</b>. Voici venu le temps de rentrer chez eux. La ville est détruite. Quelques troyens, dont le héros <b>Enée</b>, ont réussi à fuir. Les autres sont morts. On donne aux rois grecs des captives, des prisonnières comme des trophées. <b>Ménélas</b> peut retourner à Sparte avec son épouse <b>Hélène</b>, qu’il compte exécuter (mais ne va-t-il pas tomber à nouveau amoureux d’elle ?). <b>Agamemnon</b> doit rentrer à <b>Mycènes</b> auprès de son épouse <b>Clytemnestre</b> (mais ne l’a-t-elle pas remplacé ?). La princesse <b>Andromaque</b>, veuve du valeureux héros troyen <b>Hector</b>, est quant à elle enlevée par <b>Pyrrhus</b>, neveu du grand <b>Achille</b>. <b>Ulysse</b>, enfin, prend la mer pour retrouver, sur son île d’Ithaque, sa femme <b>Pénélope</b> et son fils <b>Télémaque</b>.<br/>
					Hélas, les Grecs ont oublié quelque chose.<br/>
					Les dieux et déesses de l’Olympe ont pris part aux combats, ont joué eux-mêmes des deux côtés et ont influencé la guerre. C’est grâce aux dieux et déesses que les Grecs ont réussi à vaincre. Il est important de les remercier, par des cadeaux (appelés « offrandes » : de la nourriture, des objets …). Dans leur précipitation, les Grecs partent sans remercier les dieux, ni prier le dieu de la mer Poséidon de leur assurer un retour paisible.<br/>
					Erreur fatale … Voilà les rois grecs éparpillés dans toute la mer Méditerranée au gré des tempêtes et orages lancés par des divinités en colère. <b>Poséidon</b> déchaîne les flots, <b>Zeus</b> jette sa foudre sur les navires …<br/>
					C’est ainsi que la flotte d’Ulysse, désorientée, accoste à <b>Ismaros</b> (Ἴσμαρος), ville d’un peuple allié des Troyens, les <b>Cicones</b>.<br/>`
	},
	{ name: "Les Cicones / Ismaros", markerOrientation: 'top',
	summary: "Ulysse et ses soldats accostent par erreur à Ismaros, ville des Cicones (ou “kikones”). Assoiffés de sang, ils pillent la ville et s’endorment, mais des soldats des alentours, alertés, surgissent et tuent une soixante de soldats d’Ithaque. Les compagnons d’Ulysse repartent, endeuillés.",
	stories: [
		{ title: "Suivez ses Thraces", text: "Ismaros, ou Ismara, est une cité qui appartient à la région appelée Thrace, située sur trois pays actuels différents : la Grèce, la Bulgarie et la Turquie. N’oublie pas que le “monde grec”, à l’Antiquité, s’étend sur plusieurs pays actuels, tout autour de la mer Méditerranée." },
		{ title: "Héros de père en fils", text: `Arrêtons-nous quelques instants sur la famille d’Ulysse. Le roi d’Ithaque n’est pas le seul héros de sa famille. Son père Laërte a fait partie de cette merveilleuse expédition montée par le héros Jason, qui, pour trouver la “toison d’or”, a rassemblé sur un bateau appelé l’Argo une équipe de héros plus forts les uns que les autres : les Argonautes.
Du sang divin coule également dans les veines d’Ulysse : il est le petit-fils du voleur Autolycos, un Arsène Lupin de l’Antiquité, qui n’est autre que le fils du dieu Hermès.Hermès, dieu messager, l’un des dieux les plus importants de l’Olympe, est l’arrière-grand-père d’Ulysse. On le reconnaît ici (dans une représentation moderne faite pour le jeu vidéo <i>Hadès</i>) à ses chaussures ailées représentant la vitesse et à son sceptre appelé “caducée”. C’est le facteur de la mythologie grecque : regarde tous les messages qu’il transporte dans son sac. Il est aussi le dieu des marchands … et des voleurs.` }
	] },
	{ name: "Île de Cythère", markerOrientation: 'left' },
	{ name: "Île des Lotophage", markerOrientation: 'right' },
	{ name: "Île des Cyclopes", markerOrientation: 'top' },
	{ name: "Île d'Éole", markerOrientation: 'top' },
	{ name: "Lamos", markerOrientation: 'top' },
	{ name: "Circé", markerOrientation: 'top' },
	{ name: "Les Enfers", markerOrientation: 'right' },
	{ name: "Les Sirènes", markerOrientation: 'left' },
	{ name: "Les Roches Errantes", markerOrientation: 'top' },
	{ name: "Île de Trynacie", markerOrientation: 'right' },
	{ name: "Île d’Ogygie", markerOrientation: 'right' },
	{ name: "Royaume des Phéaciens", markerOrientation: 'top' },
	{ name: "Ithaque", markerOrientation: 'right' },
];

Odyssey.coordsForStep = [
	[ 39.959309, 26.238843 ],
	[ 41.048178, 25.163423 ],
	[ 36.238423, 23.023750 ],
	[ 33.799198, 10.877222 ],
	[ 37.704656, 12.496135 ],
	[ 38.558248, 14.841137 ],
	[ 41.214860, 9.2602270 ],
	[ 41.226569, 13.052676 ],
	[ 40.942231, 14.016540 ],
	[ 39.820898, 15.796413 ],
	[ 38.269106, 15.648202 ],
	[ 37.560506, 14.158896 ],
	[ 36.077018, 14.208851 ],
	[ 39.633417, 19.858328 ],
	[ 38.445605, 20.638992 ],
];