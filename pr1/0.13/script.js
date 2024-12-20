var philosophyIterator = 0;

function philosophy() {

	var spoilerContent = "philosophyContent";
	var closeWord = "philosophyClose";
	var openWord = "philosophyOpen";

	if (philosophyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		philosophyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		philosophyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Филосо́фия (др.-греч. φιλοσοφία дословно «любомудрие; любовь к мудрости») — особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках, предельно-обобщающих понятиях и фундаментальных принципах реальности (бытия) и познания, бытия человека, об отношении человека и мира. К задачам философии на протяжении её истории относились как изучение всеобщих законов развития мира и общества, так и изучение самого процесса познания и мышления, а также изучение нравственных категорий и ценностей. К числу предельных философских вопросов относятся, например, вопросы «Познаваем ли мир?», «Существует ли Бог?», «Что такое истина?», «Что такое хорошо?», «Что есть Человек?», «Что первично — материя или сознание?» и другие.</p><br><p>Хотя иногда философию определяют более узко, в качестве науки с определённым предметом изучения, такой подход встречает возражения современных философов, настаивающих на том, что философия представляет собой скорее мировоззрение, общий критический подход к познанию всего сущего, который применим к любому объекту или концепции. В этом смысле каждый человек хотя бы изредка занимается философией.</p><br><p>Философия фактически существует в виде множества различных философских учений, которые могут противостоять друг другу, но при этом и дополняют друг друга.</p><br><p>Философия включает в себя множество предметных областей, от метафизики, эпистемологии, этики, эстетики, политической философии и философии науки до философии дизайна и философии кино.</p><br><p>Те области познания, для которых удаётся выработать ясную и работоспособную методологическую парадигму, выделяются из философии в научные дисциплины, как, например, в своё время из философии выделились физика, биология и психология.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Философия</a></br></br><span>Продолжительность 12:28</span></br><a target="_blank" href="https://www.youtube.com/watch?v=KshafAmECAo&vl=ru">https://www.youtube.com/watch?v=KshafAmECAo&vl=ru</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/KshafAmECAo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var evolutionIterator = 0;

function evolution() {

	var spoilerContent = "evolutionContent";
	var closeWord = "evolutionClose";
	var openWord = "evolutionOpen";

	if (evolutionIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		evolutionIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		evolutionIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биологическая эволю́ция (от лат. evolutio — «развёртывание») — естественный процесс развития живой природы, сопровождающийся изменением генетического состава популяций, формированием адаптаций, видообразованием и вымиранием видов, преобразованием экосистем и биосферы в целом.</p><br><p>Существует несколько эволюционных теорий, объясняющих механизмы, лежащие в основе эволюционных процессов. В данный момент наиболее общепринятой является синтетическая теория эволюции (СТЭ), являющаяся синтезом классического дарвинизма и популяционной генетики. СТЭ позволяет объяснить связь материала эволюции (генетические мутации) и механизма эволюции (естественный отбор). В рамках СТЭ эволюция определяется как процесс изменения частот аллелей генов в популяциях организмов в течение времени, превышающего продолжительность жизни одного поколения.</p><br><p>Чарлз Дарвин первым сформулировал теорию эволюции путём естественного отбора. Эволюция путём естественного отбора — это процесс, который следует из трёх фактов о популяциях: 1) рождается больше потомства, чем может выжить; 2) у разных организмов разные черты, что приводит к различиям в выживаемости и вероятности оставить потомство; 3) эти черты — наследуемые. Эти условия приводят к появлению внутривидовой конкуренции и избирательной элиминации наименее приспособленных к среде особей, что ведёт к увеличению в следующем поколении доли особей, черты которых способствуют выживанию и размножению в этой среде. Естественный отбор — единственная известная причина адаптаций, но не единственная причина эволюции. К числу неадаптивных причин относятся генетический дрейф, поток генов и мутации.</p><br><p>Несмотря на неоднозначное восприятие в обществе, эволюция как естественный процесс является твёрдо установленным научным фактом, имеет огромное количество доказательств и не вызывает сомнений в научном сообществе. В то же время отдельные аспекты теорий, объясняющих механизмы эволюции, являются предметом научных дискуссий. Открытия в эволюционной биологии оказали огромное влияние не только на традиционные области биологии, но и на другие академические дисциплины, например, антропологию, психологию. Представления об эволюции стали основой современных концепций сельского хозяйства, охраны окружающей среды, широко используются в медицине, биотехнологии и многих других социально значимых областях человеческой деятельности.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Эволюция</a><br><br><span>Продолжительность 3:51</span><br><a target="_blank" href="https://postnauka.ru/animate/88775">https://postnauka.ru/animate/88775</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/K-1ocxpiyOs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var antropogenesisIterator = 0;

function antropogenesis() {

	var spoilerContent = "antropogenesisContent";
	var closeWord = "antropogenesisClose";
	var openWord = "antropogenesisOpen";

	if (antropogenesisIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		antropogenesisIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		antropogenesisIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Антропогене́з — часть биологической эволюции, которая привела к появлению человека разумного (лат. Homo sapiens), отделившегося от прочих гоминид, человекообразных обезьян и плацентарных млекопитающих, процесс историко-эволюционного формирования физического типа человека, первоначального развития его трудовой деятельности, речи. Изучением антропогенеза занимается множество наук, в частности антропология, палеоантропология, генетика, лингвистика.</p><br><p>В эволюционном контексте термин «человек» относится не только к ныне живущим людям, но и к представителям вымерших видов рода Homo. Кроме того, исследования антропогенеза распространяются на других гоминид, например, австралопитеков. Род Homo отделился от австралопитеков или подобных им гоминин около 2 млн лет назад в Африке. Существовало несколько видов людей, большинство из которых вымерло. К ним, в частности, относятся эректусы и неандертальцы.</p><br><p>Важнейшими этапами антропогенеза, отделившими человека от других гоминид и выделившими его из мира животных, были начало изготовления орудий труда, освоение огня и появление языка.</p><br><p>Начиная с H. habilis, люди использовали каменные орудия, всё более искусно изготовленные. В последние 50 тыс. лет технология и культура изменяются быстрее, чем в предшествующие эпохи.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%B3%D0%B5%D0%BD%D0%B5%D0%B7">https://ru.wikipedia.org/wiki/Антропогенез</a></br><br><span>Продолжительность 19:39</span></br><a target="_blank" href="https://youtu.be/XdRT7Ba59r4">https://youtu.be/XdRT7Ba59r4</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/XdRT7Ba59r4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var logicIterator = 0;

function logic() {

	var spoilerContent = "logicContent";
	var closeWord = "logicClose";
	var openWord = "logicOpen";

	if (logicIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		logicIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		logicIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ло́гика (др.-греч. λογική — «наука о правильном мышлении», «способность к рассуждению» от др.-греч. λόγος — «рассуждение», «мысль», «разум») — раздел философии, нормативная наука о формах, методах и законах интеллектуальной познавательной деятельности, формализуемых на логическом языке. Поскольку это знание получено разумом, логика также определяется как наука о формах и законах мышления. Так как мышление оформляется в языке в виде рассуждения, частными случаями которого являются доказательство и опровержение, логика иногда определяется как наука о способах рассуждения или наука о способах доказательств и опровержений. Логика как наука изучает методы достижения истины в процессе познания опосредованным путём, не из чувственного опыта, а из знаний, полученных ранее, поэтому её также можно определить как науку о способах получения выводного знания.</p><br><p>В любой науке логика служит одним из основных инструментов. Кроме философии, логика также является подразделом математики, а булева алгебра одной из основ информатики.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Логика</a></br><br><span>Продолжительность 15:47</span></br><a target="_blank" href="https://youtu.be/_0JogO8i3Ls">https://youtu.be/_0JogO8i3Ls</a></br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_0JogO8i3Ls" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var scienceIterator = 0;

function science() {

	var spoilerContent = "scienceContent";
	var closeWord = "scienceClose";
	var openWord = "scienceOpen";

	if (scienceIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		scienceIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		scienceIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных знаний о действительности. Основой этой деятельности является сбор фактов, их постоянное обновление и систематизация, критический анализ и, на этой основе, синтез новых знаний или обобщений, которые не только описывают наблюдаемые природные или общественные явления, но и позволяют построить причинно-следственные связи с конечной целью прогнозирования. Те гипотезы, которые подтверждаются фактами или опытами, формулируются в виде законов природы или общества.</p><br><p>Наука в широком смысле включает в себя все условия и компоненты соответствующей деятельности:</p><br><p>&#8226; разделение и кооперацию научного труда;</p><p>&#8226; научные учреждения, экспериментальное и лабораторное оборудование;</p><p>&#8226; методы научно-исследовательской работы;</p><p>&#8226; понятийный и категориальный аппарат;</p><p>&#8226; систему научной информации;</p><p>&#8226; всю сумму накопленных ранее научных знаний.</p><br><p>Науковедение — наука, изучающая науку.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%83%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Наука</a><br><br><span>Продолжительность 2:59</span><br><a target="_blank" href="https://postnauka.ru/animate/88821">https://postnauka.ru/animate/88821</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/UozHDCGZwWk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var physicsIterator = 0;

function physics() {

	var spoilerContent = "physicsContent";
	var closeWord = "physicsClose";
	var openWord = "physicsOpen";

	if (physicsIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		physicsIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		physicsIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Фи́зика (от др.-греч. φύσις — природа) — область естествознания: наука о простейших и вместе с тем наиболее общих законах природы, о материи, её структуре и движении. Законы физики лежат в основе всего естествознания.</p><br><p>Термин «физика» впервые фигурирует в сочинениях одного из величайших мыслителей древности — Аристотеля (IV век до нашей эры). Первоначально термины «физика» и «философия» были синонимами, так как в основе обеих дисциплин лежало стремление объяснить законы функционирования Вселенной. Однако в результате научной революции XVI века физика развилась в самостоятельную научную отрасль.</p><br><p>В современном мире значение физики чрезвычайно велико. Всё то, чем отличается современное общество от общества прошлых веков, появилось в результате применения на практике физических открытий. Так, исследования в области электромагнетизма привели к появлению телефонов и позже мобильных телефонов, открытия в термодинамике позволили создать автомобиль, развитие электроники привело к появлению компьютеров. Развитие фотоники способно дать возможность создать принципиально новые — фотонные — компьютеры и другую фотонную технику, которые сменят существующую электронную технику. Развитие газодинамики привело к появлению самолётов и вертолётов.</p><br><p>Знания физики процессов, происходящих в природе, постоянно расширяются и углубляются. Большинство новых открытий вскоре получают технико-экономическое применение (в частности в промышленности). Однако перед исследователями постоянно встают новые загадки, — обнаруживаются явления, для объяснения и понимания которых требуются новые физические теории. Несмотря на огромный объём накопленных знаний, современная физика ещё очень далека от того, чтобы объяснить все явления природы.</p><br><p>Общенаучные основы физических методов разрабатываются в теории познания и методологии науки.</p><br><p>В русский язык слово «физика» было введено М. В. Ломоносовым, издавшим первый в России учебник физики — свой перевод с немецкого языка учебника «Вольфианская экспериментальная физика» Х. Вольфа (1746). Первым оригинальным учебником физики на русском языке стал курс «Краткое начертание физики» (1810), написанный П. И. Страховым.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%B7%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Физика</a><br><br><span>Продолжительность 16:44</span><br><a target="_blank" href="https://youtu.be/9I3kcVqNmpA">https://youtu.be/9I3kcVqNmpA</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/9I3kcVqNmpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var elemPartIterator = 0;

function elemPart() {

	var spoilerContent = "elemPartContent";
	var closeWord = "elemPartClose";
	var openWord = "elemPartOpen";

	if (elemPartIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		elemPartIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		elemPartIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Элемента́рная части́ца — собирательный термин, относящийся к микрообъектам в субъядерном масштабе, которые невозможно расщепить на составные части.</p><br><p>Следует иметь в виду, что некоторые элементарные частицы (электрон, нейтрино, кварки и т. д.) на данный момент считаются бесструктурными и рассматриваются как первичные фундаментальные частицы. Другие элементарные частицы (так называемые составные частицы, в том числе частицы, составляющие ядро атома — протоны и нейтроны) имеют сложную внутреннюю структуру, но, тем не менее, по современным представлениям, разделить их на части невозможно по причине эффекта конфайнмента.</p><br><p>Всего вместе с античастицами открыто более 350 элементарных частиц. Из них стабильны фотон, электронное и мюонное нейтрино, электрон, протон и их античастицы. Остальные элементарные частицы самопроизвольно распадаются по экспоненциальному закону с постоянной времени от приблизительно 1000 секунд (для свободного нейтрона) до ничтожно малой доли секунды (от 10−24 до 10−22 с для резонансов).</p><br><p>Строение и поведение элементарных частиц изучается физикой элементарных частиц.</p><br><p>Все элементарные частицы подчиняются принципу тождественности (все элементарные частицы одного вида во Вселенной полностью одинаковы по всем своим свойствам) и принципу корпускулярно-волнового дуализма (каждой элементарной частице соответствует волна де-Бройля).</p><br><p>Все элементарные частицы обладают свойством взаимопревращаемости, являющегося следствием их взаимодействий: сильного, электромагнитного, слабого, гравитационного. Взаимодействия частиц вызывают превращения частиц и их совокупностей в другие частицы и их совокупности, если такие превращения не запрещены законами сохранения энергии, импульса, момента количества движения, электрического заряда, барионного заряда и др.</p><br><p>Основные характеристики элементарных частиц: время жизни, масса, спин, электрический заряд, магнитный момент, барионный заряд, лептонный заряд, странность, изотопический спин, чётность, зарядовая чётность, G-чётность, CP-чётность.</p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/b/b0/Particle_overview-ru.svg"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Particle_overview-ru.svg/1200px-Particle_overview-ru.svg.png" alt="Particle overview-ru.svg"></div></a><br>Автор: <a target="_blank" href="//commons.wikimedia.org/wiki/User:Headbomb" title="User:Headbomb">Headbomb</a> - <a target="_blank" href="//commons.wikimedia.org/wiki/File:Particle_overview.svg" title="File:Particle overview.svg">File:Particle overview.svg</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=17177502">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%BD%D0%B0%D1%8F_%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%86%D0%B0">https://ru.wikipedia.org/wiki/Элементарная_частица</a></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var chemistryIterator = 0;

function chemistry() {

	var spoilerContent = "chemistryContent";
	var closeWord = "chemistryClose";
	var openWord = "chemistryOpen";

	if (chemistryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		chemistryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		chemistryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Хи́мия (от араб. کيمياء‎, произошедшего, предположительно, от египетского слова km.t (чёрный), откуда возникло также название Египта, чернозёма и свинца — «чёрная земля»; другие возможные варианты: др.-греч. χυμος — «сок», «эссенция», «влага», «вкус», др.-греч. χυμα — «сплав (металлов)», «литьё», «поток», др.-греч. χυμευσις — «смешивание») — одна из важнейших и обширных областей естествознания, наука о веществах, их составе и строении, их свойствах, зависящих от состава и строения, их превращениях, ведущих к изменению состава — химических реакциях, а также о законах и закономерностях, которым эти превращения подчиняются. Поскольку все вещества состоят из атомов, которые благодаря химическим связям способны формировать молекулы, то химия занимается, прежде всего, рассмотрением перечисленных выше задач на атомно-молекулярном уровне, то есть на уровне химических элементов и их соединений. Химия имеет немало связей с физикой и биологией, по сути граница между ними условна, а пограничные области изучаются квантовой химией, химической физикой, физической химией, геохимией, биохимией и другими науками.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химия</a><br><br><span>Продолжительность 23:47</span><br><a target="_blank" href="https://www.youtube.com/watch?v=bQUPWcNa8v8">https://www.youtube.com/watch?v=bQUPWcNa8v8</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/bQUPWcNa8v8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var abiogenesisIterator = 0;

function abiogenesis() {

	var spoilerContent = "abiogenesisContent";
	var closeWord = "abiogenesisClose";
	var openWord = "abiogenesisOpen";

	if (abiogenesisIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		abiogenesisIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		abiogenesisIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Химическая эволюция или пребиотическая эволюция — этап, предшествовавший появлению жизни, в ходе которого органические, пребиотические вещества возникли из неорганических молекул под влиянием внешних энергетических и селекционных факторов и в силу развертывания процессов самоорганизации, свойственных всем относительно сложным системам, которыми, бесспорно, являются все углеродсодержащие молекулы.</p><br><p>Также этими терминами обозначается теория возникновения и развития тех молекул, которые имеют принципиальное значение для возникновения и развития живого вещества.</p><br><p>Всё, что известно о химизме вещества, позволяет ограничить проблему химической эволюции рамками так называемого «водно-углеродного шовинизма», постулирующего, что жизнь в нашей Вселенной представлена в единственно возможном варианте: в качестве «способа существования белковых тел», осуществимого благодаря уникальному сочетанию полимеризационных свойств углерода и деполяризующих свойств жидко-фазной водной среды, как совместно необходимых и/или достаточных условий для возникновения и развития всех известных нам форм жизни. При этом подразумевается, что, по крайней мере, в пределах одной сформировавшейся биосферы может существовать только один, общий для всех живых существ данной биоты код наследственности, но пока остаётся открытым вопрос, существуют ли иные биосферы вне Земли и возможны ли иные варианты генетического аппарата.</p><br><p>Также неизвестно, когда и где началась химическая эволюция. Возможны любые сроки по окончанию второго цикла звёздообразования, наступившего после конденсации продуктов взрывов первичных сверхновых звезд, поставляющих в межзвездное пространство тяжелые элементы (с атомной массой более 26). Второе поколение звёзд, уже с планетными системами, обогащенными тяжёлыми элементами, которые необходимы для реализации химической эволюции появилось через 0,5—1,2 млрд лет после Большого взрыва. При выполнении некоторых вполне вероятных условий, для запуска химической эволюции может быть пригодна практически любая среда: глубины океанов, недра планет, их поверхности, протопланетные образования и даже облака межзвёздного газа, что подтверждается повсеместным обнаружением в космосе методами астрофизики многих видов органических веществ — альдегидов, спиртов, сахаров и даже аминокислоты глицина, которые вместе могут служить исходным материалом для химической эволюции, имеющей своим конечным результатом <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8">возникновение жизни</a>.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%8D%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химическая_эволюция</a><br><br><span>Продолжительность 7:32</span><br><a target="_blank" href="https://www.youtube.com/watch?v=mYfXRhwtZaE">https://www.youtube.com/watch?v=mYfXRhwtZaE</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/mYfXRhwtZaE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var biologyIterator = 0;

function biology() {

	var spoilerContent = "biologyContent";
	var closeWord = "biologyClose";
	var openWord = "biologyOpen";

	if (biologyIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biologyIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biologyIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биоло́гия (греч. βιολογία; от др.-греч. βίος — «жизнь» + λόγος — «учение, наука») — наука о живых существах и их взаимодействии со средой. Изучает все аспекты жизни, в частности, структуру, функционирование, рост, происхождение, эволюцию и распределение живых организмов на Земле. Классифицирует и описывает живые существа, происхождение их видов, взаимодействие между собой и с окружающей средой.</p><br><p>Как особая наука биология выделилась из естественных наук в XIX веке, когда учёные обнаружили, что все живые организмы обладают некоторыми общими свойствами и признаками, в совокупности не характерными для неживой природы. Термин «биология» был введён независимо несколькими авторами: Фридрихом Бурдахом в 1800 году, Готфридом Рейнхольдом Тревиранусом в 1802 году и Жаном Батистом Ламарком в 1802 году. </p><br><p>В настоящее время биология — стандартный предмет в средних и высших учебных заведениях всего мира. Ежегодно публикуется более миллиона статей и книг по биологии, медицине, биомедицине и биоинженерии.</p><br><p>Называют пять принципов, объединяющих все биологические дисциплины в единую науку о живой материи:</p><br><p>Клеточная теория — учение обо всём, что касается клеток. Все живые организмы состоят как минимум из одной клетки — основной структурно-функциональной единицы организмов. Базовые механизмы и химия всех клеток во всех земных организмах сходны; клетки происходят только от ранее существовавших клеток, которые размножаются путём клеточного деления. Клеточная теория описывает строение клеток, их деление, взаимодействие с внешней средой, состав внутренней среды и клеточной оболочки, механизм действия отдельных частей клетки и их взаимодействия между собой.</p><br><p>Эволюция. Через естественный отбор и генетический дрейф наследственные признаки популяции изменяются из поколения в поколение.</p><br><p>Теория гена. Признаки живых организмов передаются из поколения в поколение вместе с генами, которые закодированы в ДНК. Информация о строении живых существ или генотип используется клетками для создания фенотипа, наблюдаемых физических или биохимических характеристик организма. Хотя фенотип, проявляющийся за счёт экспрессии генов, может подготовить организм к жизни в окружающей его среде, информация о среде не передаётся назад в гены. Гены могут изменяться в ответ на воздействия среды только посредством эволюционного процесса.</p><br><p>Гомеостаз. Физиологические процессы, позволяющие организму поддерживать постоянство своей внутренней среды независимо от изменений во внешней среде.</p><br><p>Энергия. Атрибут любого живого организма, существенный для его состояния.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Биология</a><br><br><span>Продолжительность 21:58</span><br><a target="_blank" href="https://www.youtube.com/watch?v=iX18_aHbsW4">https://www.youtube.com/watch?v=iX18_aHbsW4</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/iX18_aHbsW4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var mathIterator = 0;

function math() {

	var spoilerContent = "mathContent";
	var closeWord = "mathClose";
	var openWord = "mathOpen";

	if (mathIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		mathIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		mathIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука о структурах, порядке и отношениях, исторически сложившаяся на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы. </p><br><p>Идеализированные свойства исследуемых объектов либо формулируются в виде аксиом, либо перечисляются в определении соответствующих математических объектов. Затем по строгим правилам логического вывода из этих свойств выводятся другие истинные свойства (теоремы). Эта теория в совокупности образует математическую модель исследуемого объекта. Таким образом, первоначально исходя из пространственных и количественных соотношений, математика получает более абстрактные соотношения, изучение которых также является предметом современной математики.</p><br><p>Традиционно математика делится на теоретическую, выполняющую углублённый анализ внутриматематических структур, и прикладную, предоставляющую свои модели другим наукам и инженерным дисциплинам, причём некоторые из них занимают пограничное с математикой положение. В частности, формальная логика может рассматриваться и как часть философских наук, и как часть математических наук; механика — и физика, и математика; информатика, компьютерные технологии и алгоритмика относятся как к инженерии, так и к математическим наукам и т. д. В литературе было предложено много различных определений математики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Математика</a><br><br><span>Продолжительность 7:10</span><br><a target="_blank" href="https://www.youtube.com/watch?v=_LXrtnYKPVc">https://www.youtube.com/watch?v=_LXrtnYKPVc</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_LXrtnYKPVc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var humanIterator = 0;

function human() {

	var spoilerContent = "humanContent";
	var closeWord = "humanClose";
	var openWord = "humanOpen";

	if (humanIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		humanIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		humanIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Челове́к разу́мный (лат. Homo sapiens; преимущественно лат. Homo sapiens sapiens) — вид рода Люди (Homo) из семейства гоминид в отряде приматов. В начале верхнего палеолита, около 40 тысяч лет назад, его ареал уже охватывает практически всю Землю. От остальных современных человекообразных, помимо ряда анатомических особенностей, отличается относительно высоким уровнем развития материальной и нематериальной культуры (включая изготовление и использование орудий труда), способностью к членораздельной речи и крайне развитому абстрактному мышлению. Человек как биологический вид является предметом исследования физической антропологии. И на сегодняшний день не осталось ни одной стороны или свойства человека как особи, индивида или члена человеческой популяции, которые бы не были охвачены специальными научными исследованиями. Основные дисциплины, изучающие человека и человечество:</p><br><p>&#8226; Антропология</p><p>&#8226; Биология человека</p><p>&#8226; Генеалогия</p><p>&#8226; Геногеография</p><p>&#8226; История</p><p>&#8226; Лингвистика</p><p>&#8226; Медицина</p><p>&#8226; Психология</p><p>&#8226; Культурология</p><p>&#8226; Социология</p><p>&#8226; Этнография</p><p>&#8226; Этология</p><br><p>Тем не менее с древних времён и до наших дней природа и сущность человека являются предметом философского и религиозного диспута.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%BD%D1%8B%D0%B9">https://ru.wikipedia.org/wiki/Человек_разумный</a><br><br><span>Продолжительность 13:32</span><br><a target="_blank" href="https://youtu.be/3mai-GNTi3g">https://www.youtube.com/watch?v=3mai-GNTi3g</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3mai-GNTi3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var biosphereIterator = 0;

function biosphere() {

	var openWord = "biosphereOpen";
	var spoilerContent = "biosphereContent";
	var closeWord = "biosphereClose";

	if (biosphereIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biosphereIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biosphereIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биосфе́ра (от др.-греч. βιος — жизнь и σφαῖρα — сфера, шар) — оболочка Земли, заселённая живыми организмами, находящаяся под их воздействием и занятая продуктами их жизнедеятельности, а также совокупность её свойств как планеты, где создаются условия для развития биологических систем; глобальная экосистема Земли.</p><br><p>Биосфера — оболочка Земли, заселённая живыми организмами и преобразованная ими. Биосфера начала формироваться не позднее, чем 3,8 млрд лет назад, когда на нашей планете стали зарождаться первые организмы. Она проникает во всю гидросферу, верхнюю часть литосферы и нижнюю часть атмосферы, то есть населяет экосферу. Биосфера представляет собой совокупность всех живых организмов. В ней обитает более 3 000 000 видов растений, животных, грибов и бактерий. Человек тоже является частью биосферы, его деятельность превосходит многие природные процессы и, как сказал В. И. Вернадский: «Человек становится могучей геологической силой».</p><br><p>Французский учёный-естествоиспытатель Жан Батист Ламарк в начале XIX в. впервые предложил концепцию биосферы, ещё не введя даже самого термина. Термин «биосфера» был предложен австрийским геологом и палеонтологом Эдуардом Зюссом в 1875 году.</p><br><p>Целостное учение о биосфере создал советский биогеохимик и философ В. И. Вернадский. Он впервые отвёл живым организмам роль главнейшей преобразующей силы планеты Земля, учитывая их деятельность не только в настоящее время, но и в прошлом.</p><br><p>Существует и другое, более широкое определение: Биосфера — область распространения жизни на космическом теле. При том, что существование жизни на других космических объектах, помимо Земли пока неизвестно, считается, что биосфера может распространяться на них в более скрытых областях, например, в литосферных полостях или в подлёдных океанах. Так, например, рассматривается возможность существования жизни в океане Европы — спутника Юпитера. </p><br><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D1%81%D1%84%D0%B5%D1%80%D0%B0">https://ru.wikipedia.org/wiki/Биосфера</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var mindIterator = 0;

function mind() {

	var spoilerContent = "mindContent";
	var closeWord = "mindClose";
	var openWord = "mindOpen";

	if (mindIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		mindIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		mindIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ра́зум (лат. ratio), ум (греч. νους) — философская категория, выражающая высший тип мыслительной деятельности, способность мыслить всеобще, способность анализа, абстрагирования и обобщения.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%83%D0%BC">https://ru.wikipedia.org/wiki/Разум</a><br><br><p>Мышле́ние — это познавательная деятельность человека. Оно является опосредованным и обобщённым способом отражения действительности.</p><br><p>Результатом мышления является мысль (понятие, смысл, идея). Мышление противопоставляют «низшим» способам освоения мира в форме ощущения или восприятия, которые свойственны в том числе и животным. Многие философы называли мышление сущностным свойством человека. Так Декарт утверждал: «Я мыслю, следовательно, я существую». Паскаль называл человека мыслящим тростником.</p><br><p>Особенностью мышления является свойство получать знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты. Это свойство мышления осуществляется посредством таких умозаключений как аналогия и дедукция.</p><br><p>Мышление связано с функционированием мозга, однако сама способность мозга к оперированию абстракциями возникает в ходе усвоения человеком форм практической жизни, норм языка, логики, культуры. Мышление осуществляется в многообразных формах духовной и практической деятельности, в которых обобщается и сохраняется познавательный опыт людей. Мышление осуществляется в образно-знаковой форме, основные результаты его активности выражаются здесь в продуктах художественного (прим. философского, математического, научного, инженерного) и религиозного творчества, своеобразно обобщающих познавательный опыт человечества. Мышление осуществляется также в собственной адекватной ему форме теоретического познания, которое с опорой на предшествующие формы приобретает неограниченные (?) возможности умозрительного и модельного видения мира.</p><br><p>Мышление изучается почти всеми существующими научными дисциплинами, являясь в то же время объектом исследования ряда философских дисциплин — логики, гносеологии, диалектики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Мышление</a><br><br><p>Мышление — психический процесс моделирования закономерностей окружающего мира на основе аксиоматических положений. Однако в психологии существует множество других определений.</p><br><p>Например: высший этап обработки информации человеком, процесс установления связей между объектами или явлениями окружающего мира; или — процесс отражения существенных свойств объектов, а также связей между ними, что приводит к появлению представлений об объективной реальности. Споры по поводу определения продолжаются по сей день.</p><br><p>В патопсихологии и нейропсихологии мышление относят к одной из высших психических функций. Оно рассматривается как деятельность, имеющая мотив, цель, систему действий и операций, результат и контроль.</p><br><p>Мышление — высшая ступень человеческого познания; процесс познания окружающего реального мира, основу которого составляет образование и непрерывное пополнение запаса понятий, представлений; включает в себя вывод новых суждений (осуществление умозаключений). Мышление позволяет получить знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты при помощи первой сигнальной системы. Формы и законы мышления составляют предмет рассмотрения логики, а психофизиологические механизмы — соответственно, психологии и физиологии.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Мышление_(психология)</a><br><br><span>Продолжительность 8:16</span><br><a target="_blank" href="https://youtu.be/3drHAhc5P9A">https://youtu.be/3drHAhc5P9A</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3drHAhc5P9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var neuralCircuitIterator = 0;

function neuralCircuit() {

	var spoilerContent = "neuralCircuitContent";
	var closeWord = "neuralCircuitClose";
	var openWord = "neuralCircuitOpen";

	if (neuralCircuitIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		neuralCircuitIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		neuralCircuitIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Нейронная сеть (биологическая нейронная сеть) — совокупность нейронов головного и спинного мозга центральной нервной системы (ЦНС) и ганглия периферической нервной системы (ПНС), которые связаны или функционально объединены в нервной системе, выполняют специфические физиологические функции.</p><br><p>Нейронная сеть состоит из группы или групп химически или функционально связанных нейронов. Один нейрон может быть связан со многими другими нейронами, а общее количество нейронов и связей в сети может быть достаточно большим. Место контакта нейронов называется синапсом, типичный синапс — аксо-дендритический химический. Передача импульсов осуществляется химическим путём с помощью медиаторов или электрическим путём посредством прохождения ионов из одной клетки в другую.</p><br><p>Представление о нейронных сетях оказало значительное влияние на технологии искусственного интеллекта, в попытке построить математическую модель нейронной сети был создан обширный инструментарий искусственных нейронных сетей, широко используемый в прикладной математике и информатике.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Нейронная_сеть</a><br><br><span>Продолжительность 25:36</span><br><a target="_blank" href="https://www.youtube.com/watch?v=SnIoGkixxLo">https://www.youtube.com/watch?v=SnIoGkixxLo</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/SnIoGkixxLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var organAnatomIterator = 0;

function organAnatom() {

	var openWord = "organAnatomOpen";
	var spoilerContent = "organAnatomContent";
	var closeWord = "organAnatomClose";

	if (organAnatomIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		organAnatomIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		organAnatomIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>О́рган (др.-греч. ὄργανον — «инструмент») — обособленная совокупность различных типов клеток и тканей, выполняющая определённую функцию в живом организме.</p><br><p>Орган представляет собой функциональю единицу в пределах организма, обособленную от других функциональных единиц данного организма. Органы одного организма связаны в своих функциях между собой таким образом, что организм является совокупностью органов, которые часто объединяются в различные системы органов.</p><br><p>Органом называется лишь та совокупность тканей и клеток, которая имеет устойчивое положение в пределах организма и чьё развитие прослеживается в пределах онтогенеза (органогенез).</p><br><p>Органная организация клеток и тканей характерна как для животных, так и для высших растений. У водорослей и других многоклеточных и колониальных протистов, а также у грибов органы в строгом понимании этого термина отсутствуют, так как у них нет тканей. Тем не менее органами часто называют спорангии грибов и водорослей, соредии и изидии лишайников и т. п. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%B3%D0%B0%D0%BD_(%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Орган_(биология)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var behaviourIterator = 0;

function behaviour() {

	var openWord = "behaviourOpen";
	var spoilerContent = "behaviourContent";
	var closeWord = "behaviourClose";

	if (behaviourIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		behaviourIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		behaviourIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Поведе́ние — определённый сложившийся образ взаимодействия с окружающей средой. Поведение определяется способностью изменять свои действия под влиянием внутренних и внешних факторов. Поведение — характерная черта животного типа организации, оно имеет огромное приспособительное значение, позволяя животным избегать негативных факторов окружающей среды; хотя поведение характерно и для более простых организмов, например, простейшие проявляют способность перемещаться в ответ на раздражители среды и способны к элементарным формам научения. У многоклеточных организмов поведение находится под контролем нервной системы. В целом можно отметить, что поведение возникает на высоком уровне организации, когда организм приобретает способность воспринимать, хранить и преобразовывать информацию, используя её с целью самосохранения и приспособления к условиям существования.</p><br><p>Поведение, в отличие от психики, доступно для непосредственного наблюдения и является предметом широкого спектра наук, от психологии, этологии, зоопсихологии и сравнительной психологии до поведенческой экологии. А. Н. Леонтьев предложил в качестве объективного критерия психики (в отличие от поведения) рассматривать способность живых организмов реагировать на «биологически нейтральные раздражители» от которых не зависит жизнь организма.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Поведение</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var nervousSystemIterator = 0;

function nervousSystem() {

	var openWord = "nervousSystemOpen";
	var spoilerContent = "nervousSystemContent";
	var closeWord = "nervousSystemClose";

	if (nervousSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		nervousSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		nervousSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Не́рвная систе́ма — целостная морфологическая и функциональная совокупность различных взаимосвязанных нервных структур, которая совместно с эндокринной системой обеспечивает взаимосвязанную регуляцию деятельности всех систем организма человека и реакцию на изменение условий внутренней и внешней среды. Нервная система действует как интегративная система, связывая в одно целое чувствительность, двигательную активность и работу других регуляторных систем (эндокринной и иммунной).</p><br><p>Нервная система человека часто делится на центральную нервную систему (ЦНС) и периферическую нервную систему (ПНС). ЦНС состоит из головного и спинного мозга. ПНС состоит из всех других нервов и нейронов, которые не лежат в пределах ЦНС. Преобладающее большинство нервов (которые фактически являются аксонами нейронов) принадлежит ПНС. Периферийная нервная система делится на соматическую нервную систему и вегетативную нервную систему.</p><br><p>Соматическая нервная система отвечает за координацию движения тела, а также за получение и передачу внешних стимулов. Эта система регулирует действия, которые находятся под сознательным контролем.</p><br><p>Автономная нервная система делится на парасимпатическую и симпатическую. Симпатическая нервная система отвечает опасности или стресс, и, среди многих физиологических изменений, может вызвать увеличение сердечного ритма и кровяного давления и возбуждения органов чувств благодаря увеличению адреналина в крови. Парасимпатическая нервная система, с другой стороны, отвечает за состояние отдыха, и обеспечивает сокращение зрачка, замедление сердца, расширение кровеносных сосудов и стимулирования пищеварительных и мочеполовых систем.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Нервная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var endocrineSystemIterator = 0;

function endocrineSystem() {

	var openWord = "endocrineSystemOpen";
	var spoilerContent = "endocrineSystemContent";
	var closeWord = "endocrineSystemClose";

	if (endocrineSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		endocrineSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		endocrineSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Эндокри́нная систе́ма — система регуляции деятельности внутренних органов посредством гормонов, выделяемых эндокринными клетками непосредственно в кровь либо диффундирующих через межклеточное пространство в соседние клетки.</p><br><p>Не́йроэндокри́нная (эндокринная) система координирует и регулирует деятельность практически всех органов и систем организма, обеспечивает его адаптацию к постоянно изменяющимся условиям внешней и внутренней среды, сохраняя постоянство внутренней среды, необходимое для поддержания нормальной жизнедеятельности данного индивидуума. Имеются чёткие указания на то, что осуществление перечисленных функций нейроэндокринной системы возможно только в тесном взаимодействии с иммунной системой.</p><br><p>Эндокринная система делится на гландулярную эндокринную систему (или гландулярный аппарат), в которой эндокринные клетки собраны вместе и формируют железу внутренней секреции, и диффузную эндокринную систему. Железа внутренней секреции производит гландулярные гормоны, к которым относятся все стероидные гормоны, гормоны щитовидной железы и многие пептидные гормоны. Диффузная эндокринная система представлена рассеянными по всему организму эндокринными клетками, продуцирующими гормоны, называемые агландулярными — (за исключением кальцитриола) пептиды. Практически в любой ткани организма имеются эндокринные клетки. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BD%D0%B4%D0%BE%D0%BA%D1%80%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Эндокринная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var immuneSystemIterator = 0;

function immuneSystem() {

	var openWord = "immuneSystemOpen";
	var spoilerContent = "immuneSystemContent";
	var closeWord = "immuneSystemClose";

	if (immuneSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		immuneSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		immuneSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Имму́нная систе́ма — система органов, существующая у позвоночных животных и объединяющая органы и ткани, которые защищают организм от заболеваний, идентифицируя и уничтожая опухолевые клетки и патогены. Иммунная система распознаёт множество разнообразных возбудителей — от вирусов до паразитических червей — и отличает их от биомолекул собственных клеток. Распознавание возбудителей усложняется их адаптацией и эволюционным развитием новых методов успешного инфицирования организма-хозяина.</p><br><p>Конечной целью иммунной системы является уничтожение чужеродного агента, которым может оказаться болезнетворный микроорганизм, инородное тело, ядовитое вещество или переродившаяся клетка самого организма. Этим достигается биологическая индивидуальность организма.</p><br><p>В иммунной системе развитых организмов существует множество способов обнаружения и удаления чужеродных агентов: этот процесс называется иммунным ответом. Все формы иммунного ответа можно разделить на врождённые и приобретённые реакции. Основное различие между ними в том, что приобретённый иммунитет высокоспецифичен по отношению к конкретному типу антигенов и позволяет быстрее и эффективнее уничтожать их при повторном столкновении. Антигенами называют молекулы, воспринимаемые как чужеродные агенты и вызывающие специфические реакции организма. Например, у перенёсших ветрянку, корь, дифтерию людей часто возникает пожизненный иммунитет к этим заболеваниям. В случае аутоиммунных реакций антигеном может служить молекула, произведённая самим организмом.</p><br><p>Некоторые вещества, вырабатываемые иммунной системой, активно влияют на работу центральной нервной системы.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BC%D0%BC%D1%83%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0">https://ru.wikipedia.org/wiki/Иммунная_система</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var informationIterator = 0;

function information() {

	var openWord = "informationOpen";
	var spoilerContent = "informationContent";
	var closeWord = "informationClose";

	if (informationIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		informationIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		informationIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Информа́ция (от лат. informātiō «разъяснение, представление, понятие о чём-либо» ← informare «придавать вид, форму, обучать; мыслить, воображать») — сведения независимо от формы их представления.</p><br><p>Несмотря на широкую распространённость, понятие информации остаётся одним из самых дискуссионных в науке, а термин может иметь различные значения в разных отраслях человеческой деятельности.</p><br><p>Определений информации существует множество, причём академик Н. Н. Моисеев даже полагал, что в силу широты этого понятия нет и не может быть строгого и достаточно универсального определения информации. В международных и российских стандартах даются следующие определения:</p><br><span>&#8226; знания о предметах, фактах, идеях и т. д., которыми могут обмениваться люди в рамках конкретного контекста (ISO/IEC 10746-2:1996);</span><br><span>&#8226; знания относительно фактов, событий, вещей, идей и понятий, которые в определённом контексте имеют конкретный смысл (ISO/IEC 2382:2015);</span><br><span>&#8226; сведения, воспринимаемые человеком и (или) специальными устройствами как отражение фактов материального или духовного мира в процессе коммуникации (ГОСТ 7.0-99).</span><br><br><p>Хотя информация должна обрести некоторую форму представления (то есть превратиться в данные), чтобы ею можно было обмениваться, информация есть в первую очередь интерпретация (смысл) такого представления (ISO/IEC/IEEE 24765:2010). Поэтому в строгом смысле информация отличается от данных, хотя в неформальном контексте эти два термина очень часто используют как синонимы.</p><p>Первоначально «информация» — сведения, передаваемые людьми устным, письменным или другим способом (с помощью условных сигналов, технических средств и т. д.); с середины XX века термин «информация» превратился в общенаучное понятие, включающее обмен сведениями между людьми, человеком и автоматом, автоматом и автоматом; обмен сигналами в животном и растительном мире; передачу признаков от клетки к клетке, от организма к организму (например, генетическая информация); одно из основных понятий кибернетики.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Информация</a><br><br><span>Продолжительность 11:55</span><br><a target="_blank" href="https://www.youtube.com/watch?v=AbIwsTMi-rw">https://www.youtube.com/watch?v=AbIwsTMi-rw</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/AbIwsTMi-rw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var sensorReceptorIterator = 0;

function sensorReceptor() {

	var openWord = "sensorReceptorOpen";
	var spoilerContent = "sensorReceptorContent";
	var closeWord = "sensorReceptorClose";

	if (sensorReceptorIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		sensorReceptorIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		sensorReceptorIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Реце́птор — объединение из терминалей (нервных окончаний) дендритов чувствительных нейронов, глии, специализированных образований межклеточного вещества и специализированных клеток других тканей, которые в комплексе обеспечивают превращение влияния факторов внешней или внутренней среды (раздражитель) в нервный импульс. В некоторых рецепторах (например, вкусовых и слуховых рецепторах человека) раздражитель непосредственно воспринимается специализированными клетками эпителиального происхождения или видоизменёнными нервными клетками (чувствительные элементы сетчатки), которые не генерируют нервных импульсов, а действуют на иннервирующие их нервные окончания, изменяя секрецию медиатора. В других случаях единственным клеточным элементом рецепторного комплекса является само нервное окончание, часто связанное со специальными структурами межклеточного вещества (например, тельце Пачини).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%BE%D1%80">https://ru.wikipedia.org/wiki/Рецептор</a><br><br><p>Клеточный рецептор — молекула (обычно белок или гликопротеид) на поверхности клетки, клеточных органелл или растворенная в цитоплазме. Специфично реагирует изменением своей пространственной конфигурации на присоединение к ней молекулы определённого химического вещества, передающего внешний регуляторный сигнал и, в свою очередь, передает этот сигнал внутрь клетки или клеточной органеллы, нередко при помощи так называемых вторичных посредников или трансмембранных ионных токов.</p><br><p>Вещество, специфически соединяющееся с рецептором, называется лигандом этого рецептора. Внутри организма это обычно гормон или нейромедиатор либо их искусственные заменители, применяемые в качестве лекарственных средств и ядов (агонисты). Некоторые лиганды, напротив, блокируют рецепторы (антагонисты). Когда речь идет об органах чувств, лигандами являются вещества, воздействующие на рецепторы обоняния или вкуса. Кроме того, молекулы зрительных рецепторов реагируют на свет, а в органах слуха и осязания рецепторы чувствительны к механическим воздействиям (давлению или растяжению), вызываемым колебаниями воздуха и иными раздражителями. Существуют также термочувствительные белки-рецепторы и белки-рецепторы, реагирующие на изменение мембранного потенциала.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D0%BE%D1%80">https://ru.wikipedia.org/wiki/Клеточный_рецептор</a><br><br><span>Продолжительность 13:46</span><br><a target="_blank" href="https://postnauka.ru/video/52871">https://postnauka.ru/video/52871</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/bNbvaOrCOPg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var geneIterator = 0;

function gene() {

	var openWord = "geneOpen";
	var spoilerContent = "geneContent";
	var closeWord = "geneClose";

	if (geneIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		geneIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		geneIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Ген (др.-греч. γένος — род) — структурная и функциональная единица наследственности живых организмов. Ген представляет собой участок ДНК, задающий последовательность определённого полипептида либо функциональной РНК. Гены (точнее, аллели генов) определяют наследственные признаки организмов, передающиеся от родителей потомству при размножении. Среди некоторых организмов, в основном одноклеточных, встречается горизонтальный перенос генов, не связанный с размножением. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD">https://ru.wikipedia.org/wiki/Ген</a><br><br><span>Продолжительность 4:30</span><br><a target="_blank" href="https://www.youtube.com/watch?v=kDyigLiOupA">https://www.youtube.com/watch?v=kDyigLiOupA</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/kDyigLiOupA"" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var geneticCodeIterator = 0;

function geneticCode() {

	var openWord = "geneticCodeOpen";
	var spoilerContent = "geneticCodeContent";
	var closeWord = "geneticCodeClose";

	if (geneticCodeIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		geneticCodeIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		geneticCodeIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Генети́ческий код (англ. Genetic code) — совокупность правил, согласно которым в живых клетках последовательность нуклеотидов (ген и мРНК) переводится в последовательность аминокислот (белок). Собственно перевод (трансляцию) осуществляет рибосома, которая соединяет аминокислоты в цепочку согласно инструкции, записанной в кодонах мРНК. Соответствующие аминокислоты доставляются в рибосому молекулами тРНК. Генетический код всех живых организмов Земли един (имеются лишь незначительные вариации), что свидетельствует о наличии общего предка.</p><br><p>Правила генетического кода определяют, какой аминокислоте соответствует триплет (три подряд идущих нуклеотида) в мРНК. За редкими исключениями, каждому кодону соответствует только одна аминокислота. Конкретная аминокислота может кодироваться более чем одним кодоном, есть также кодоны, означающие начало и конец белка. Вариант генетического кода, который используется подавляющим большинством живых организмов, называют стандартным, или каноническим, генетическим кодом. Однако известно несколько десятков исключений из стандартного генетического кода, например, при трансляции в митохондриях используются несколько изменённые правила генетического кода.</p><br><p>Простейшим представлением генетического кода может служить таблица из 64 ячеек, в которой каждая ячейка соответствует одному из 64 возможных кодонов.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%B4">https://ru.wikipedia.org/wiki/Генетический_код</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var rewardSystemIterator = 0;

function rewardSystem() {

	var openWord = "rewardSystemOpen";
	var spoilerContent = "rewardSystemContent";
	var closeWord = "rewardSystemClose";

	if (rewardSystemIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		rewardSystemIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		rewardSystemIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Система вознаграждения или система внутреннего подкрепления (англ. reward system) — это совокупность структур нервной системы, участвующих в регулировании и контроле поведения при помощи положительных реакций на действия. Система вознаграждения наряду с системой наказаний играет основную роль в механизмах закрепления поведения. </p><br><p>Психологическая награда — это процесс закрепления поведения при помощи приятных ощущений. Понятие награды используется для описания положительных качеств, приписываемых индивидом объекту, поведенческому акту, или внутреннему физическому состоянию. Первичные (естественные) награды закрепляют поведение, необходимое для выживания вида, такое как питание, спаривание и борьба.</p><br><p>Вторичные награды тесно связаны с первичными и определяют ценность объектов, действий и состояний, связанных с удовлетворением первичных потребностей. Ценность безопасного убежища, денег, комфорта, красоты, приятных прикосновений, звуков и многого другого определяется вторичной наградой.</p><br><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%B2%D0%BE%D0%B7%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Система_вознаграждения</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var pleasureIterator = 0;

function pleasure() {

	var openWord = "pleasureOpen";
	var spoilerContent = "pleasureContent";
	var closeWord = "pleasureClose";

	if (pleasureIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		pleasureIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		pleasureIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Удово́льствие — положительно окрашенная эмоция, сопровождающая удовлетворение одной или нескольких потребностей. Антонимом удовольствия являются страдание и боль. Понятие удовольствия в философии Эпикура отождествлено со счастьем. В дальнейшем такая позиция получила наименование гедонизм. Стоики, напротив, считали удовольствие страстью, вызывающей зависимость и привычку. Сейчас под удовольствием подразумевают контролируемые определённым участком головного мозга ощущения, создающие положительный эмоциональный фон.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D0%B4%D0%BE%D0%B2%D0%BE%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Удовольствие</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var reflexIterator = 0;

function reflex() {

	var openWord = "reflexOpen";
	var spoilerContent = "reflexContent";
	var closeWord = "reflexClose";

	if (reflexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		reflexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		reflexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Безусловные рефлексы — наследственно передаваемые (врождённые) реакции организма, присущие всему виду. Выполняют защитную функцию, а также функцию поддержания гомеостаза (постоянства внутренней среды организма).</p><br><p>Безусловные рефлексы — это наследуемые, неизменные реакции организма на определённые воздействия внешней или внутренней среды, независимо от условий возникновения и протекания реакций. Безусловные рефлексы обеспечивают приспособление организма к неизменным условиям среды. Основные типы безусловных рефлексов: пищевые, защитные, ориентировочные, половые.</p><br><p>Примером защитного рефлекса является рефлекторное отдергивание руки от горячего объекта. Гомеостаз поддерживается, например, рефлекторным учащением дыхания при избытке углекислого газа в крови. Практически каждая часть тела и каждый орган участвует в рефлекторных реакциях.</p><br><p>Простейшие нейронные сети, или дуги (по выражению Шеррингтона), участвующие в безусловных рефлексах, замыкаются в сегментарном аппарате спинного мозга, но могут замыкаться и выше (например, в подкорковых ганглиях или в коре). Другие отделы нервной системы также участвуют в рефлексах: ствол мозга, мозжечок, кора больших полушарий.</p><br><p>Дуги безусловных рефлексов формируются к моменту рождения и сохраняются в течение всей жизни. Однако они могут изменяться под влиянием болезни. Многие безусловные рефлексы проявляются лишь в определённом возрасте; так, свойственный новорождённым хватательный рефлекс угасает в возрасте 3—4 месяцев.</p><br><p>Примером безусловного рефлекса у кошек может служить их способность приземляться на четыре лапы, несмотря на то, в каком положении кошка была в начале падения и с какой высоты она упала. Рефлекс приземления на лапы начинает проявляться у котят к возрасту 3—4 недели и закрепляется к 6—7 неделям.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%84%D0%BB%D0%B5%D0%BA%D1%81_(%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Рефлекс_(биология)</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var conditionalReflexIterator = 0;

function conditionalReflex() {

	var openWord = "conditionalReflexOpen";
	var spoilerContent = "conditionalReflexContent";
	var closeWord = "conditionalReflexClose";

	if (conditionalReflexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		conditionalReflexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		conditionalReflexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Усло́вный рефле́кс — это приобретенный рефлекс, свойственный отдельному индивиду (особи). Возникают в течение жизни особи и не закрепляются генетически (не передаются по наследству). Возникают при определённых условиях и исчезают при их отсутствии. Формируются на базе безусловных рефлексов при участии высших отделов мозга. Условнорефлекторные реакции зависят от прошлого опыта, от конкретных условий, в которых формируется условный рефлекс.</p><br><p>Изучение условных рефлексов связано в первую очередь с именем И. П. Павлова и учениками его школы. Они показали, что новый условный стимул может запустить рефлекторную реакцию, если он некоторое время предъявляется вместе с безусловным стимулом. Например, если собаке дать понюхать мясо, то у неё выделяется желудочный сок (это безусловный рефлекс). Если же одновременно с появлением мяса звенит звонок, то нервная система собаки ассоциирует этот звук с пищей, и желудочный сок будет выделяться в ответ на звонок, даже если мясо не предъявлено. Это явление было открыто независимо Эдвином Твитмайером приблизительно в то же время, что и в лаборатории И. П. Павлова. Условные рефлексы лежат в основе приобретенного поведения. Это наиболее простые программы. Окружающий мир постоянно меняется, поэтому в нём могут успешно жить лишь те, кто быстро и целесообразно отвечает на эти изменения. По мере приобретения жизненного опыта в коре полушарий складывается система условнорефлекторных связей. Такую систему называют динамическим стереотипом. Он лежит в основе многих привычек и навыков. Например, научившись кататься на коньках, велосипеде, мы впоследствии уже не думаем о том, как нам двигаться, чтобы не упасть.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5_%D1%80%D0%B5%D1%84%D0%BB%D0%B5%D0%BA%D1%81%D1%8B">https://ru.wikipedia.org/wiki/Условные_рефлексы</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var memoryIterator = 0;

function memory() {

	var openWord = "memoryOpen";
	var spoilerContent = "memoryContent";
	var closeWord = "memoryClose";

	if (memoryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		memoryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		memoryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Па́мять — это общее обозначение для комплекса познавательных способностей и высших психических функций по накоплению, сохранению и воспроизведению знаний и навыков.</p><br><p>Память в разных формах и видах присуща всем высшим животным. Способность к памяти и обучению все животные унаследовали у общего предка, который жил примерно 600 миллионов лет назад. Наиболее развитый уровень памяти характерен для человека.</p><br><p>Память относится к основным познавательным процессам, таким, как ощущение, восприятие и мышление, привлекающим наибольшее внимание исследователей.</p><br><p>Пионером в исследовании памяти человека считается Герман Эббингауз, ставивший эксперименты на себе (основной методикой было заучивание бессмысленных списков слов или слогов).</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Память</a><br><br><span>Продолжительность 3:56</span><br><a target="_blank" href="https://www.youtube.com/watch?v=wsCjlkgp67g">https://www.youtube.com/watch?v=wsCjlkgp67g</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/wsCjlkgp67g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div><br><span>Продолжительность 54:55</span><br><a target="_blank" href="https://youtu.be/v1G4w6sUSMk">https://youtu.be/v1G4w6sUSMk</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/v1G4w6sUSMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var biochemistryIterator = 0;

function biochemistry() {

	var openWord = "biochemistryOpen";
	var spoilerContent = "biochemistryContent";
	var closeWord = "biochemistryClose";

	if (biochemistryIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		biochemistryIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		biochemistryIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Биохи́мия (биологи́ческая, или физиологи́ческая хи́мия) — наука о химическом составе живых клеток и организмов, а также о лежащих в основе их жизнедеятельности химических процессах. Термин «биохимия» эпизодически употреблялся с середины XIX века, в классическом смысле он был предложен и введён в научную среду в 1903 году немецким химиком Карлом Нейбергом.</p><br><p>Биохимия — сравнительно молодая наука, которая находится на стыке биологии и химии. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D1%85%D0%B8%D0%BC%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Биохимия</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var psycheIterator = 0;

function psyche() {

	var openWord = "psycheOpen";
	var spoilerContent = "psycheContent";
	var closeWord = "psycheClose";

	if (psycheIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		psycheIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		psycheIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Пси́хика (от др.-греч. ψῡχικός «душевный, жизненный») — сложное понятие в философии, психологии и медицине, которое в зависимости от областей знаний и направлений наук определяется следующим образом.</p><br><span>&#8226; Совокупность душевных процессов и явлений (ощущения, восприятия, эмоции, память и т. п.); специфический аспект жизнедеятельности животных и человека в их взаимодействии с окружающей средой.</span><br><span>&#8226; «Форма активного отображения субъектом объективной реальности, возникающая в процессе взаимодействия высокоорганизованных живых существ с внешним миром и осуществляющая в их поведении (деятельности) регулятивную функцию».</span><br><span>&#8226; Системное свойство высокоорганизованной материи, заключающееся в активном отражении субъектом объективного мира и саморегуляции на этой основе своего поведения и деятельности.</span><br><span>&#8226; Внутренний мир человека.</span><br><p>Психика животных — субъективный мир животного, охватывающий весь комплекс субъективно переживаемых процессов и состояний: восприятие, память, мышление, намерения, сны и т. п.</p><br><p>Психика характеризуется такими качествами, как целостность, активность, развитие, саморегуляция, коммуникативность, адаптация и т. д.; связана с соматическими процессами. Появляется на определённой стадии биологической эволюции. Изучением психики занимается наука психология.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%B8%D1%85%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Психика</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var brainIterator = 0;

function brain() {

	var openWord = "brainOpen";
	var spoilerContent = "brainContent";
	var closeWord = "brainClose";

	if (brainIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		brainIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		brainIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Мозг — центральный отдел нервной системы животных, обычно расположенный в головном (переднем) отделе тела и представляющий собой компактное скопление нервных клеток и их отростков-дендритов. У многих животных содержит также глиальные клетки, может быть окружен оболочкой из соединительной ткани. У позвоночных животных (в том числе и у человека) различают головной мозг, размещённый в полости черепа, и спинной, находящийся в позвоночном канале. </p><br><p>В философии сознания различаются понятия разум и мозг, и отмечаются противоречия относительно их точных отношений, которые приводят к проблеме «разум—тело».</p><br><p>Мозг определяется как физическая и биологическая материя, содержащаяся в пределах черепа и ответственная за основные электрохимические и биоэлектронные нейронные процессы. С точки зрения современной науки, мозг представляет собой сложнейшую нейронную сеть, производящую и обрабатывающую огромное количество логически связанных электрохимических импульсов, и внутренний мир человека, в том числе его разум, является продуктом этой работы.</p><br><p>В современном научном сообществе точка зрения о том, что разум — продукт работы мозга, является главенствующей. Так же считают сторонники искусственного интеллекта.</p><br><p>Кроме того имеют место высказывания о том, что разум компьютероподобен и алгоритмичен. Точки зрения «порождаемость разума мозгом» и «компьютероподобие разума» не обязательно сопутствуют друг другу.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B7%D0%B3">https://ru.wikipedia.org/wiki/Мозг</a><br><br><p>Головно́й мозг челове́ка (лат. encephalon) является органом центральной нервной системы, состоящей из множества взаимосвязанных между собой нервных клеток и их отростков.</p><br><p>Головной мозг человека занимает почти всю полость мозгового отдела черепа, кости которого защищают головной мозг от внешних механических повреждений. B процессе роста и развития головной мозг принимает форму черепа.</p><br><p>Головной мозг человека содержит в среднем 86 миллиардов нейронов и потребляет для питания 50 % глюкозы, вырабатываемой печенью и поступающей в кровь.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9_%D0%BC%D0%BE%D0%B7%D0%B3_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Головной_мозг_человека</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var eyeRetinaIterator = 0;

function eyeRetina() {

	var openWord = "eyeRetinaOpen";
	var spoilerContent = "eyeRetinaContent";
	var closeWord = "eyeRetinaClose";

	if (eyeRetinaIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		eyeRetinaIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		eyeRetinaIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Сетча́тка (лат. retína) — внутренняя оболочка глаза, являющаяся периферическим отделом зрительного анализатора; содержит фоторецепторные клетки, обеспечивающие восприятие и преобразование электромагнитного излучения видимой части спектра в нервные импульсы, а также обеспечивает их первичную обработку.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%82%D1%87%D0%B0%D1%82%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Сетчатка</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var photonIterator = 0;

function photon() {

	var openWord = "photonOpen";
	var spoilerContent = "photonContent";
	var closeWord = "photonClose";

	if (photonIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		photonIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		photonIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Фото́н (от др.-греч. φῶς, род. пад. φωτός, «свет») — элементарная частица, квант электромагнитного излучения (в узком смысле — света) в виде поперечных электромагнитных волн и переносчик электромагнитного взаимодействия. Это безмассовая частица, способная существовать в вакууме только двигаясь со скоростью света. Электрический заряд фотона также равен нулю. Фотон может находиться только в двух спиновых состояниях с проекцией спина на направление движения (спиральностью) ±1. В физике фотоны обозначаются буквой γ.</p><br><p>Классическая электродинамика описывает фотон как электромагнитную волну с круговой правой или левой поляризацией. С точки зрения классической квантовой механики, фотону, как квантовой частице, свойственен корпускулярно-волновой дуализм, он проявляет одновременно свойства частицы и волны.</p><br><p>Квантовая электродинамика, основанная на квантовой теории поля и Стандартной модели, описывает фотон как калибровочный бозон, обеспечивающий электромагнитное взаимодействие между частицами: виртуальные фотоны являются квантами-переносчиками электромагнитного поля.</p><br><p>Современная наука рассматривает фотон как фундаментальную элементарную частицу, не обладающую структурой и размерами.</p><br><p>Фотон — самая распространённая по численности частица во Вселенной. На один нуклон приходится не менее 20 миллиардов фотонов.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D0%BD">https://ru.wikipedia.org/wiki/Фотон</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var lightIterator = 0;

function light() {

	var openWord = "lightOpen";
	var spoilerContent = "lightContent";
	var closeWord = "lightClose";

	if (lightIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		lightIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		lightIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Свет — в физической оптике электромагнитное излучение, воспринимаемое человеческим глазом. В качестве коротковолновой границы спектрального диапазона, занимаемого светом, принят участок с длинами волн в вакууме 380—400 нм (750—790 ТГц), а в качестве длинноволновой границы — участок 760—780 нм (385—395 ТГц).</p><br><p>В широком смысле, используемом вне физической оптики, светом часто называют любое оптическое излучение, то есть такое электромагнитное излучение, длины волн которого лежат в диапазоне с приблизительными границами от единиц нанометров до десятых долей миллиметра. В этом случае в понятие «свет» помимо видимого излучения включаются как инфракрасное, так и ультрафиолетовое излучения.</p><br><p>Раздел физики, в котором изучается свет, носит название оптика.</p><br><p>Также, особенно в теоретической физике, термин свет может иногда выступать просто синонимом термина электромагнитное излучение, независимо от его частоты, особенно когда конкретизация не важна, а хотят, например, использовать более короткое слово.</p><br><p>Свет может рассматриваться либо как электромагнитная волна, скорость распространения в вакууме которой постоянна, либо как поток фотонов — частиц, обладающих определённой энергией, импульсом, собственным моментом импульса и нулевой массой (или, как говорили ранее, нулевой массой покоя).</p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/2/28/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png/1200px-%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D1%80.png" alt="Электромагнитный спектр.png"></div></a><br>Автор: Philip Ronan - <a target="_blank" class="external free" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:EM_spectrum.svg">https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:EM_spectrum.svg</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=72548216">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82">https://ru.wikipedia.org/wiki/Свет</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var earIterator = 0;

function ear() {

	var openWord = "earOpen";
	var spoilerContent = "earContent";
	var closeWord = "earClose";

	if (earIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		earIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		earIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>У́хо — сложный орган животных, предназначенный для восприятия звуковых колебаний. У большинства хордовых он, кроме восприятия звука, выполняет ещё одну функцию: отвечает за положение тела в пространстве и способность удерживать равновесие. Ухо позвоночных — парный орган, который размещается в височных костях черепа. У млекопитающих (в том числе у человека) ухо ограничивается снаружи ушными раковинами.</p><br><p>Ухо человека воспринимает звуковые волны частотой примерно от 8 до 20 000 Гц (колебаний в секунду), что соответствует длине волны (в воздухе при нормальных условиях) от 20,6 м до 1,7 см.</p><br><p>В процессе эволюционного развития ухо возникло у первичноводных предков позвоночных из особых кожных органов чувств (боковые органы). </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A3%D1%85%D0%BE">https://ru.wikipedia.org/wiki/Ухо</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var audioSignalIterator = 0;

function audioSignal() {

	var openWord = "audioSignalOpen";
	var spoilerContent = "audioSignalContent";
	var closeWord = "audioSignalClose";

	if (audioSignalIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		audioSignalIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		audioSignalIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Звук — физическое явление, представляющее собой распространение в виде упругих волн механических колебаний в твёрдой, жидкой или газообразной среде. В узком смысле под звуком имеют в виду эти колебания, рассматриваемые в связи с тем, как они воспринимаются органами чувств животных.</p><br><p>Как и любая волна, звук характеризуется амплитудой и частотой. Амплитуда характеризует громкость звука. Частота определяет тон, высоту. Обычный человек способен слышать звуковые колебания в диапазоне частот от 16—20 Гц до 15—20 кГц. Звук ниже диапазона слышимости человека называют инфразвуком; выше: до 1 ГГц, — ультразвуком, от 1 ГГц — гиперзвуком. Громкость звука сложным образом зависит от эффективного звукового давления, частоты и формы колебаний, а высота звука — не только от частоты, но и от величины звукового давления.</p><br><p>Среди слышимых звуков следует особо выделить фонетические, речевые звуки и фонемы (из которых состоит устная речь) и музыкальные звуки (из которых состоит музыка). Музыкальные звуки содержат не один, а несколько тонов, а иногда и шумовые компоненты в широком диапазоне частот.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%83%D0%BA">https://ru.wikipedia.org/wiki/Звук</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var cerebralCortexIterator = 0;

function cerebralCortex() {

	var openWord = "cerebralCortexOpen";
	var spoilerContent = "cerebralCortexContent";
	var closeWord = "cerebralCortexClose";

	if (cerebralCortexIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cerebralCortexIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cerebralCortexIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Кора больших полушарий головного мозга или кора головного мозга (лат. cortex cerebri) — структура головного мозга, слой серого вещества толщиной 1,3—4,5 мм, расположенный по периферии полушарий большого мозга и покрывающий их. Наибольшая толщина отмечается в верхних участках предцентральной, постцентральной извилин и парацентральной дольки.</p><p>Кора головного мозга играет очень важную роль в осуществлении высшей нервной (психической) деятельности.</p><p>Кора головного мозга человека составляет более 80 % массы мозга.</p><p>У человека кора составляет в среднем 44 % от объёма всего полушария в целом. Площадь поверхности коры одного полушария у взрослого человека 2400 см² (в основном от 2000 до 2800 см²). На поверхностные части приходится 1/3, на залегающие в глубине между извилинами — 2/3 всей площади коры.</p><p>Величина и форма борозд подвержены значительным индивидуальным колебаниям — не только мозг различных людей, но даже полушария одной и той же особи по рисунку борозд не вполне похожи.</p><p>Всю кору полушарий принято разделять на 4 типа: древняя (палеокортекс), старая (архикортекс), новая (неокортекс) и промежуточная кора (состоящая из промежуточной древней и промежуточной старой коры). Поверхность неокортекса у человека занимает 95,6 %, архикортекса — 2,2 %, палеокортекса — 0,6 %, промежуточной — 1,6 %.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B0_%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D1%85_%D0%BF%D0%BE%D0%BB%D1%83%D1%88%D0%B0%D1%80%D0%B8%D0%B9">https://ru.wikipedia.org/wiki/Кора_больших_полушарий</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var consciousnessIterator = 0;

function consciousness() {

	var openWord = "consciousnessOpen";
	var spoilerContent = "consciousnessContent";
	var closeWord = "consciousnessClose";

	if (consciousnessIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		consciousnessIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		consciousnessIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Сознание — представление субъекта о мире и о своем месте в нем, связанное со способностью дать отчет о своем внутреннем психическом опыте и необходимом для разумной организации совместной деятельности. Существует также мнение, что сознание — биологическая функция мозга человека, позволяющая индивиду получать некоторое представление об окружающем мире, включая самого себя. Механизм сознания сформировался в результате эволюции человека. Физиология этого механизма до конца не выяснена.</p><br><p>Сознание обрабатывает информацию со скоростью примерно 60 бит в секунд, при том, как подсознание обрабатывает входной поток информации в 11 миллионов бит в секунду.</p><br><p>Согласно культурно-историческому подходу, характерной особенностью сознания является то, что промежуточным звеном между объективной реальностью и сознанием являются элементы общественно-исторической практики, позволяющие строить объективные (общепринятые) представления о мире.</p><br><span>Предмет: Осознаваемые явления (ощущения, представления, чувствования, идеи) и акты</span><br><br><span>Представители: Вильгельм Вундт, Уильям Джеймс, Франц Брентано, Эдуард Бредфорд Титченер</span><br><br><p>Психология сознания не представляла собой целостного подхода. Скорее, она являлась конгломератом нескольких парадигм исследования, объединенных общим предметом и согласием во взгляде на психологию, как на науку о «непосредственном опыте» (В.Вундт).</p><br>Источник:<br><a target="_blank" href="">https://ru.wikipedia.org/wiki/</a><br><br><span>Продолжительность 15:54</span><br><a target="_blank" href="https://postnauka.ru/video/82975">https://postnauka.ru/video/82975</a><br><div class="resp-wrapper"><iframe class="resp-iframe" src="https://www.youtube.com/embed/8ogFpiLt6uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var cultureIterator = 0;

function culture() {

	var openWord = "cultureOpen";
	var spoilerContent = "cultureContent";
	var closeWord = "cultureClose";

	if (cultureIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cultureIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cultureIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>Культу́ра (от лат. cultura — возделывание, позднее — воспитание, образование, развитие, почитание) — понятие, имеющее огромное количество значений в различных областях человеческой жизнедеятельности. Культура является предметом изучения философии, культурологии, истории, искусствознания, лингвистики (этнолингвистики), политологии, этнологии, психологии, экономики, педагогики и др.</p><br><p>В основном, под культурой понимают человеческую деятельность в её самых разных проявлениях, включая все формы и способы человеческого самовыражения и самопознания, накопление человеком и социумом в целом навыков и умений. Культура предстает также проявлением человеческой субъективности и объективности (характера, компетентностей, навыков, умений и знаний).</p><br><p>Культура представляет собой совокупность устойчивых форм человеческой деятельности, без которых она не может воспроизводиться, а значит — существовать.</p><br><p>Культура — это набор правил, которые предписывают человеку определённое поведение с присущими ему переживаниями и мыслями, оказывая на него, тем самым, управленческое воздействие.</p><br><p>Источником происхождения культуры мыслится человеческая деятельность, познание и творчество. </p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B0">https://ru.wikipedia.org/wiki/Культура</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var cognitiveBiasesIterator = 0;

function cognitiveBiases() {

	var openWord = "cognitiveBiasesOpen";
	var spoilerContent = "cognitiveBiasesContent";
	var closeWord = "cognitiveBiasesClose";

	if (cognitiveBiasesIterator === 0) {
		viewSpoiler(openWord, spoilerContent, closeWord);
		cognitiveBiasesIterator++;
	} else {
		closeSpoiler(openWord, spoilerContent, closeWord);
		cognitiveBiasesIterator--;
	}

	function viewSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '<div class="spoilerBox"><p>В когнитивной науке под когнити́вными искаже́ниями понимаются систематические ошибки в мышлении или шаблонные отклонения, которые возникают на основе дисфункциональных убеждений, внедрённых в когнитивные схемы, и легко обнаруживаются при анализе автоматических мыслей. Существование большинства когнитивных искажений было описано учёными, а многие были доказаны в психологических экспериментах.</p><br><p>Когнитивные искажения являются примером эволюционно сложившегося ментального поведения. Некоторые из них выполняют адаптивную функцию, поскольку они способствуют более эффективным действиям или более быстрым решениям. Другие, по-видимому, происходят из отсутствия соответствующих навыков мышления или из-за неуместного применения навыков, бывших адаптивными в других условиях.</p><br><p>Разработка и применение методов коррекции когнитивных искажений, вызывающих проблемы эмоционального, личностного, социального характера, является предметом различных направлений психотерапии, в частности когнитивной психотерапии. </p><br><p><a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/1/1a/Cognitive_biases_diagram_RU.png"><div class="resp-wrapper"><img class="resp-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Cognitive_biases_diagram_RU.png/1200px-Cognitive_biases_diagram_RU.png" alt="Cognitive biases diagram RU.png"></div></a><br>Автор: Original designer: John Manoogian III (jm3). Organizational model: Buster Benson. Translation to Russian + Ukrainian with some graphical changes: Alexey Ezhikov, Alexander Obraz, Oleksii Karachynskyi - <a target="_blank" rel="nofollow" class="external free" href="http://obraz.io/ru/images/164/">http://obraz.io/ru/images/164/</a>, <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a target="_blank" href="https://commons.wikimedia.org/w/index.php?curid=56472200">Ссылка</a></p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B3%D0%BD%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85_%D0%B8%D1%81%D0%BA%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9">https://ru.wikipedia.org/wiki/Список_когнитивных_искажений</a><br></div><br>';
		document.getElementById(closeWord).innerHTML = document.getElementById(openWord).innerHTML;
		//document.getElementById(closeWord).setAttribute("class", "spoilerWord");
		document.getElementById(closeWord).setAttribute("class", "spoilerWordActive");
		document.getElementById(openWord).setAttribute("class", "spoilerWordActive");
	}

	function closeSpoiler(openWord, spoilerContent, closeWord) {
		document.getElementById(spoilerContent).innerHTML = '';
		document.getElementById(closeWord).innerHTML = '';
		var element = document.getElementById(openWord);
		document.getElementById(openWord).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}