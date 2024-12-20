var philosophyVar = 0;

function philosophy() {

	var n = "philosophy";
	var m = "philosophy2";
	var l = "philosophy1";

	if (philosophyVar === 0) {
		view(n, m, l);
		philosophyVar++;
	} else {
		close(n, m, l);
		philosophyVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Филосо́фия (др.-греч. φιλοσοφία дословно «любомудрие; любовь к мудрости») — особая форма познания мира, вырабатывающая систему знаний о наиболее общих характеристиках, предельно-обобщающих понятиях и фундаментальных принципах реальности (бытия) и познания, бытия человека, об отношении человека и мира. К задачам философии на протяжении её истории относились как изучение всеобщих законов развития мира и общества, так и изучение самого процесса познания и мышления, а также изучение нравственных категорий и ценностей. К числу предельных философских вопросов относятся, например, вопросы «Познаваем ли мир?», «Существует ли Бог?», «Что такое истина?», «Что такое хорошо?», «Что есть Человек?», «Что первично — материя или сознание?» и другие.</p><br><p>Хотя иногда философию определяют более узко, в качестве науки с определённым предметом изучения, такой подход встречает возражения современных философов, настаивающих на том, что философия представляет собой скорее мировоззрение, общий критический подход к познанию всего сущего, который применим к любому объекту или концепции. В этом смысле каждый человек хотя бы изредка занимается философией.</p><br><p>Философия фактически существует в виде множества различных философских учений, которые могут противостоять друг другу, но при этом и дополняют друг друга.</p><br><p>Философия включает в себя множество предметных областей, от метафизики, эпистемологии, этики, эстетики, политической философии и философии науки до философии дизайна и философии кино.</p><br><p>Те области познания, для которых удаётся выработать ясную и работоспособную методологическую парадигму, выделяются из философии в научные дисциплины, как, например, в своё время из философии выделились физика, биология и психология.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Философия</a></br></br><a target="_blank" href="https://www.youtube.com/watch?v=KshafAmECAo&vl=ru">https://www.youtube.com/watch?v=KshafAmECAo&vl=ru</a></br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/KshafAmECAo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var antropogenesisVar = 0;

function antropogenesis() {

	var n = "antropogenesis";
	var m = "antropogenesis2";
	var l = "antropogenesis1";

	if (antropogenesisVar === 0) {
		view(n, m, l);
		antropogenesisVar++;
	} else {
		close(n, m, l);
		antropogenesisVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Антропогене́з — часть биологической эволюции, которая привела к появлению человека разумного (лат. Homo sapiens), отделившегося от прочих гоминид, человекообразных обезьян и плацентарных млекопитающих, процесс историко-эволюционного формирования физического типа человека, первоначального развития его трудовой деятельности, речи. Изучением антропогенеза занимается множество наук, в частности антропология, палеоантропология, генетика, лингвистика.</p><br><p>В эволюционном контексте термин «человек» относится не только к ныне живущим людям, но и к представителям вымерших видов рода Homo. Кроме того, исследования антропогенеза распространяются на других гоминид, например, австралопитеков. Род Homo отделился от австралопитеков или подобных им гоминин около 2 млн лет назад в Африке. Существовало несколько видов людей, большинство из которых вымерло. К ним, в частности, относятся эректусы и неандертальцы.</p><br><p>Важнейшими этапами антропогенеза, отделившими человека от других гоминид и выделившими его из мира животных, были начало изготовления орудий труда, освоение огня и появление языка.</p><br><p>Начиная с H. habilis, люди использовали каменные орудия, всё более искусно изготовленные. В последние 50 тыс. лет технология и культура изменяются быстрее, чем в предшествующие эпохи.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D0%B3%D0%B5%D0%BD%D0%B5%D0%B7">https://ru.wikipedia.org/wiki/Антропогенез</a></br></br><a target="_blank" href="https://youtu.be/XdRT7Ba59r4">https://youtu.be/XdRT7Ba59r4</a></br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/XdRT7Ba59r4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var logicVar = 0;

function logic() {

	var n = "logic";
	var m = "logic2";
	var l = "logic1";

	if (logicVar === 0) {
		view(n, m, l);
		logicVar++;
	} else {
		close(n, m, l);
		logicVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Ло́гика (др.-греч. λογική — «наука о правильном мышлении», «способность к рассуждению» от др.-греч. λόγος — «рассуждение», «мысль», «разум») — раздел философии, нормативная наука о формах, методах и законах интеллектуальной познавательной деятельности, формализуемых на логическом языке. Поскольку это знание получено разумом, логика также определяется как наука о формах и законах мышления. Так как мышление оформляется в языке в виде рассуждения, частными случаями которого являются доказательство и опровержение, логика иногда определяется как наука о способах рассуждения или наука о способах доказательств и опровержений. Логика как наука изучает методы достижения истины в процессе познания опосредованным путём, не из чувственного опыта, а из знаний, полученных ранее, поэтому её также можно определить как науку о способах получения выводного знания.</p><br><p>В любой науке логика служит одним из основных инструментов. Кроме философии, логика также является подразделом математики, а булева алгебра одной из основ информатики.</p><br>Источник:</br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B3%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Логика</a></br></br><a target="_blank" href="https://youtu.be/_0JogO8i3Ls">https://youtu.be/_0JogO8i3Ls</a></br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_0JogO8i3Ls" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var scienceVar = 0;

function science() {

	var n = "science";
	var m = "science2";
	var l = "science1";

	if (scienceVar === 0) {
		view(n, m, l);
		scienceVar++;
	} else {
		close(n, m, l);
		scienceVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Нау́ка — область человеческой деятельности, направленная на выработку и систематизацию объективных знаний о действительности. Основой этой деятельности является сбор фактов, их постоянное обновление и систематизация, критический анализ и, на этой основе, синтез новых знаний или обобщений, которые не только описывают наблюдаемые природные или общественные явления, но и позволяют построить причинно-следственные связи с конечной целью прогнозирования. Те гипотезы, которые подтверждаются фактами или опытами, формулируются в виде законов природы или общества.</p><br><p>Наука в широком смысле включает в себя все условия и компоненты соответствующей деятельности:</p><br><ul><li>разделение и кооперацию научного труда;</li><li>научные учреждения, экспериментальное и лабораторное оборудование;</li><li>методы научно-исследовательской работы;</li><li>понятийный и категориальный аппарат;</li><li>систему научной информации;</li><li>всю сумму накопленных ранее научных знаний.</li></ul><p>Науковедение — наука, изучающая науку.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%83%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Наука</a><br><br><a target="_blank" href="https://youtu.be/UozHDCGZwWk">https://youtu.be/UozHDCGZwWk</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/UozHDCGZwWk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var physicsVar = 0;

function physics() {

	var n = "physics";
	var m = "physics2";
	var l = "physics1";

	if (physicsVar === 0) {
		view(n, m, l);
		physicsVar++;
	} else {
		close(n, m, l);
		physicsVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Фи́зика (от др.-греч. φύσις — природа) — область естествознания: наука о простейших и вместе с тем наиболее общих законах природы, о материи, её структуре и движении. Законы физики лежат в основе всего естествознания.</p><br><p>Термин «физика» впервые фигурирует в сочинениях одного из величайших мыслителей древности — Аристотеля (IV век до нашей эры). Первоначально термины «физика» и «философия» были синонимами, так как в основе обеих дисциплин лежало стремление объяснить законы функционирования Вселенной. Однако в результате научной революции XVI века физика развилась в самостоятельную научную отрасль.</p><br><p>В современном мире значение физики чрезвычайно велико. Всё то, чем отличается современное общество от общества прошлых веков, появилось в результате применения на практике физических открытий. Так, исследования в области электромагнетизма привели к появлению телефонов и позже мобильных телефонов, открытия в термодинамике позволили создать автомобиль, развитие электроники привело к появлению компьютеров. Развитие фотоники способно дать возможность создать принципиально новые — фотонные — компьютеры и другую фотонную технику, которые сменят существующую электронную технику. Развитие газодинамики привело к появлению самолётов и вертолётов.</p><br><p>Знания физики процессов, происходящих в природе, постоянно расширяются и углубляются. Большинство новых открытий вскоре получают технико-экономическое применение (в частности в промышленности). Однако перед исследователями постоянно встают новые загадки, — обнаруживаются явления, для объяснения и понимания которых требуются новые физические теории. Несмотря на огромный объём накопленных знаний, современная физика ещё очень далека от того, чтобы объяснить все явления природы.</p><br><p>Общенаучные основы физических методов разрабатываются в теории познания и методологии науки.</p><br><p>В русский язык слово «физика» было введено М. В. Ломоносовым, издавшим первый в России учебник физики — свой перевод с немецкого языка учебника «Вольфианская экспериментальная физика» Х. Вольфа (1746). Первым оригинальным учебником физики на русском языке стал курс «Краткое начертание физики» (1810), написанный П. И. Страховым.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%B7%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Физика</a><br><br><a target="_blank" href="https://youtu.be/9I3kcVqNmpA">https://youtu.be/9I3kcVqNmpA</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/9I3kcVqNmpA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var elemPartVar = 0;

function elemPart() {

	var n = "elemPart";
	var m = "elemPart2";
	var l = "elemPart1";

	if (elemPartVar === 0) {
		view(n, m, l);
		elemPartVar++;
	} else {
		close(n, m, l);
		elemPartVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Элемента́рная части́ца — собирательный термин, относящийся к микрообъектам в субъядерном масштабе, которые невозможно расщепить на составные части.</p><br><p>Следует иметь в виду, что некоторые элементарные частицы (электрон, нейтрино, кварки и т. д.) на данный момент считаются бесструктурными и рассматриваются как первичные фундаментальные частицы. Другие элементарные частицы (так называемые составные частицы, в том числе частицы, составляющие ядро атома — протоны и нейтроны) имеют сложную внутреннюю структуру, но, тем не менее, по современным представлениям, разделить их на части невозможно по причине эффекта конфайнмента.</p><br><p>Всего вместе с античастицами открыто более 350 элементарных частиц. Из них стабильны фотон, электронное и мюонное нейтрино, электрон, протон и их античастицы. Остальные элементарные частицы самопроизвольно распадаются по экспоненциальному закону с постоянной времени от приблизительно 1000 секунд (для свободного нейтрона) до ничтожно малой доли секунды (от 10−24 до 10−22 с для резонансов).</p><br><p>Строение и поведение элементарных частиц изучается физикой элементарных частиц.</p><br><p>Все элементарные частицы подчиняются принципу тождественности (все элементарные частицы одного вида во Вселенной полностью одинаковы по всем своим свойствам) и принципу корпускулярно-волнового дуализма (каждой элементарной частице соответствует волна де-Бройля).</p><br><p>Все элементарные частицы обладают свойством взаимопревращаемости, являющегося следствием их взаимодействий: сильного, электромагнитного, слабого, гравитационного. Взаимодействия частиц вызывают превращения частиц и их совокупностей в другие частицы и их совокупности, если такие превращения не запрещены законами сохранения энергии, импульса, момента количества движения, электрического заряда, барионного заряда и др.</p><br><p>Основные характеристики элементарных частиц: время жизни, масса, спин, электрический заряд, магнитный момент, барионный заряд, лептонный заряд, странность, изотопический спин, чётность, зарядовая чётность, G-чётность, CP-чётность.</p><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Particle_overview-ru.svg/800px-Particle_overview-ru.svg.png" alt="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Particle_overview-ru.svg/800px-Particle_overview-ru.svg.png"><br><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%BD%D0%B0%D1%8F_%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%86%D0%B0">https://ru.wikipedia.org/wiki/Элементарная_частица</a></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var chemistryVar = 0;

function chemistry() {

	var n = "chemistry";
	var m = "chemistry2";
	var l = "chemistry1";

	if (chemistryVar === 0) {
		view(n, m, l);
		chemistryVar++;
	} else {
		close(n, m, l);
		chemistryVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Хи́мия (от араб. کيمياء‎, произошедшего, предположительно, от египетского слова km.t (чёрный), откуда возникло также название Египта, чернозёма и свинца — «чёрная земля»; другие возможные варианты: др.-греч. χυμος — «сок», «эссенция», «влага», «вкус», др.-греч. χυμα — «сплав (металлов)», «литьё», «поток», др.-греч. χυμευσις — «смешивание») — одна из важнейших и обширных областей естествознания, наука о веществах, их составе и строении, их свойствах, зависящих от состава и строения, их превращениях, ведущих к изменению состава — химических реакциях, а также о законах и закономерностях, которым эти превращения подчиняются. Поскольку все вещества состоят из атомов, которые благодаря химическим связям способны формировать молекулы, то химия занимается, прежде всего, рассмотрением перечисленных выше задач на атомно-молекулярном уровне, то есть на уровне химических элементов и их соединений. Химия имеет немало связей с физикой и биологией, по сути граница между ними условна, а пограничные области изучаются квантовой химией, химической физикой, физической химией, геохимией, биохимией и другими науками.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химия</a><br><br><a target="_blank" href="https://www.youtube.com/watch?v=bQUPWcNa8v8">https://www.youtube.com/watch?v=bQUPWcNa8v8</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/bQUPWcNa8v8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var abiogenesisVar = 0;

function abiogenesis() {

	var n = "abiogenesis";
	var m = "abiogenesis2";
	var l = "abiogenesis1";

	if (abiogenesisVar === 0) {
		view(n, m, l);
		abiogenesisVar++;
	} else {
		close(n, m, l);
		abiogenesisVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Химическая эволюция или пребиотическая эволюция — этап, предшествовавший появлению жизни, в ходе которого органические, пребиотические вещества возникли из неорганических молекул под влиянием внешних энергетических и селекционных факторов и в силу развертывания процессов самоорганизации, свойственных всем относительно сложным системам, которыми, бесспорно, являются все углеродсодержащие молекулы.</p><br><p>Также этими терминами обозначается теория возникновения и развития тех молекул, которые имеют принципиальное значение для возникновения и развития живого вещества.</p><br><p>Всё, что известно о химизме вещества, позволяет ограничить проблему химической эволюции рамками так называемого «водно-углеродного шовинизма», постулирующего, что жизнь в нашей Вселенной представлена в единственно возможном варианте: в качестве «способа существования белковых тел», осуществимого благодаря уникальному сочетанию полимеризационных свойств углерода и деполяризующих свойств жидко-фазной водной среды, как совместно необходимых и/или достаточных условий для возникновения и развития всех известных нам форм жизни. При этом подразумевается, что, по крайней мере, в пределах одной сформировавшейся биосферы может существовать только один, общий для всех живых существ данной биоты код наследственности, но пока остаётся открытым вопрос, существуют ли иные биосферы вне Земли и возможны ли иные варианты генетического аппарата.</p><br><p>Также неизвестно, когда и где началась химическая эволюция. Возможны любые сроки по окончанию второго цикла звёздообразования, наступившего после конденсации продуктов взрывов первичных сверхновых звезд, поставляющих в межзвездное пространство тяжелые элементы (с атомной массой более 26). Второе поколение звёзд, уже с планетными системами, обогащенными тяжёлыми элементами, которые необходимы для реализации химической эволюции появилось через 0,5—1,2 млрд лет после Большого взрыва. При выполнении некоторых вполне вероятных условий, для запуска химической эволюции может быть пригодна практически любая среда: глубины океанов, недра планет, их поверхности, протопланетные образования и даже облака межзвёздного газа, что подтверждается повсеместным обнаружением в космосе методами астрофизики многих видов органических веществ — альдегидов, спиртов, сахаров и даже аминокислоты глицина, которые вместе могут служить исходным материалом для химической эволюции, имеющей своим конечным результатом <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8">возникновение жизни</a>.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%8D%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Химическая_эволюция</a><br><br><a target="_blank" href="https://www.youtube.com/watch?v=mYfXRhwtZaE">https://www.youtube.com/watch?v=mYfXRhwtZaE</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/mYfXRhwtZaE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var biologyVar = 0;

function biology() {

	var n = "biology";
	var m = "biology2";
	var l = "biology1";

	if (biologyVar === 0) {
		view(n, m, l);
		biologyVar++;
	} else {
		close(n, m, l);
		biologyVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Биоло́гия (греч. βιολογία; от др.-греч. βίος — «жизнь» + λόγος — «учение, наука») — наука о живых существах и их взаимодействии со средой. Изучает все аспекты жизни, в частности, структуру, функционирование, рост, происхождение, эволюцию и распределение живых организмов на Земле. Классифицирует и описывает живые существа, происхождение их видов, взаимодействие между собой и с окружающей средой.</p><br><p>Как особая наука биология выделилась из естественных наук в XIX веке, когда учёные обнаружили, что все живые организмы обладают некоторыми общими свойствами и признаками, в совокупности не характерными для неживой природы. Термин «биология» был введён независимо несколькими авторами: Фридрихом Бурдахом в 1800 году, Готфридом Рейнхольдом Тревиранусом в 1802 году и Жаном Батистом Ламарком в 1802 году. </p><br><p>В настоящее время биология — стандартный предмет в средних и высших учебных заведениях всего мира. Ежегодно публикуется более миллиона статей и книг по биологии, медицине, биомедицине и биоинженерии.</p><br><p>Называют пять принципов, объединяющих все биологические дисциплины в единую науку о живой материи:</p><br><p>Клеточная теория — учение обо всём, что касается клеток. Все живые организмы состоят как минимум из одной клетки — основной структурно-функциональной единицы организмов. Базовые механизмы и химия всех клеток во всех земных организмах сходны; клетки происходят только от ранее существовавших клеток, которые размножаются путём клеточного деления. Клеточная теория описывает строение клеток, их деление, взаимодействие с внешней средой, состав внутренней среды и клеточной оболочки, механизм действия отдельных частей клетки и их взаимодействия между собой.</p><br><p>Эволюция. Через естественный отбор и генетический дрейф наследственные признаки популяции изменяются из поколения в поколение.</p><br><p>Теория гена. Признаки живых организмов передаются из поколения в поколение вместе с генами, которые закодированы в ДНК. Информация о строении живых существ или генотип используется клетками для создания фенотипа, наблюдаемых физических или биохимических характеристик организма. Хотя фенотип, проявляющийся за счёт экспрессии генов, может подготовить организм к жизни в окружающей его среде, информация о среде не передаётся назад в гены. Гены могут изменяться в ответ на воздействия среды только посредством эволюционного процесса.</p><br><p>Гомеостаз. Физиологические процессы, позволяющие организму поддерживать постоянство своей внутренней среды независимо от изменений во внешней среде.</p><br><p>Энергия. Атрибут любого живого организма, существенный для его состояния.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Биология</a><br><br><a target="_blank" href="https://www.youtube.com/watch?v=iX18_aHbsW4">https://www.youtube.com/watch?v=iX18_aHbsW4</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/iX18_aHbsW4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var mathVar = 0;

function math() {

	var n = "math";
	var m = "math2";
	var l = "math1";

	if (mathVar === 0) {
		view(n, m, l);
		mathVar++;
	} else {
		close(n, m, l);
		mathVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Матема́тика (др.-греч. μᾰθημᾰτικά < μάθημα «изучение; наука») — наука о структурах, порядке и отношениях, исторически сложившаяся на основе операций подсчёта, измерения и описания формы объектов. Математические объекты создаются путём идеализации свойств реальных или других математических объектов и записи этих свойств на формальном языке. Математика не относится к естественным наукам, но широко используется в них как для точной формулировки их содержания, так и для получения новых результатов. Математика — фундаментальная наука, предоставляющая (общие) языковые средства другим наукам; тем самым она выявляет их структурную взаимосвязь и способствует нахождению самых общих законов природы. </p><br><p>Идеализированные свойства исследуемых объектов либо формулируются в виде аксиом, либо перечисляются в определении соответствующих математических объектов. Затем по строгим правилам логического вывода из этих свойств выводятся другие истинные свойства (теоремы). Эта теория в совокупности образует математическую модель исследуемого объекта. Таким образом, первоначально исходя из пространственных и количественных соотношений, математика получает более абстрактные соотношения, изучение которых также является предметом современной математики.</p><br><p>Традиционно математика делится на теоретическую, выполняющую углублённый анализ внутриматематических структур, и прикладную, предоставляющую свои модели другим наукам и инженерным дисциплинам, причём некоторые из них занимают пограничное с математикой положение. В частности, формальная логика может рассматриваться и как часть философских наук, и как часть математических наук; механика — и физика, и математика; информатика, компьютерные технологии и алгоритмика относятся как к инженерии, так и к математическим наукам и т. д. В литературе было предложено много различных определений математики.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0">https://ru.wikipedia.org/wiki/Математика</a><br><br><a href="https://www.youtube.com/watch?v=_LXrtnYKPVc">https://www.youtube.com/watch?v=_LXrtnYKPVc</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/_LXrtnYKPVc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}



var evolutionVar = 0;

function evolution() {

	var n = "evolution";
	var m = "evolution2";
	var l = "evolution1";

	if (evolutionVar === 0) {
		view(n, m, l);
		evolutionVar++;
	} else {
		close(n, m, l);
		evolutionVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Биологическая эволю́ция (от лат. evolutio — «развёртывание») — естественный процесс развития живой природы, сопровождающийся изменением генетического состава популяций, формированием адаптаций, видообразованием и вымиранием видов, преобразованием экосистем и биосферы в целом.</p><br><p>Существует несколько эволюционных теорий, объясняющих механизмы, лежащие в основе эволюционных процессов. В данный момент наиболее общепринятой является синтетическая теория эволюции (СТЭ), являющаяся синтезом классического дарвинизма и популяционной генетики. СТЭ позволяет объяснить связь материала эволюции (генетические мутации) и механизма эволюции (естественный отбор). В рамках СТЭ эволюция определяется как процесс изменения частот аллелей генов в популяциях организмов в течение времени, превышающего продолжительность жизни одного поколения.</p><br><p>Чарлз Дарвин первым сформулировал теорию эволюции путём естественного отбора. Эволюция путём естественного отбора — это процесс, который следует из трёх фактов о популяциях: 1) рождается больше потомства, чем может выжить; 2) у разных организмов разные черты, что приводит к различиям в выживаемости и вероятности оставить потомство; 3) эти черты — наследуемые. Эти условия приводят к появлению внутривидовой конкуренции и избирательной элиминации наименее приспособленных к среде особей, что ведёт к увеличению в следующем поколении доли особей, черты которых способствуют выживанию и размножению в этой среде. Естественный отбор — единственная известная причина адаптаций, но не единственная причина эволюции. К числу неадаптивных причин относятся генетический дрейф, поток генов и мутации.</p><br><p>Несмотря на неоднозначное восприятие в обществе, эволюция как естественный процесс является твёрдо установленным научным фактом, имеет огромное количество доказательств и не вызывает сомнений в научном сообществе. В то же время отдельные аспекты теорий, объясняющих механизмы эволюции, являются предметом научных дискуссий. Открытия в эволюционной биологии оказали огромное влияние не только на традиционные области биологии, но и на другие академические дисциплины, например, антропологию, психологию. Представления об эволюции стали основой современных концепций сельского хозяйства, охраны окружающей среды, широко используются в медицине, биотехнологии и многих других социально значимых областях человеческой деятельности.</p><br>Источник:<br><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">https://ru.wikipedia.org/wiki/Эволюция</a><br><br><a target="_blank" href="https://www.youtube.com/watch?v=K-1ocxpiyOs">https://www.youtube.com/watch?v=K-1ocxpiyOs</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/K-1ocxpiyOs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var humanVar = 0;

function human() {

	var n = "human";
	var m = "human2";
	var l = "human1";

	if (humanVar === 0) {
		view(n, m, l);
		humanVar++;
	} else {
		close(n, m, l);
		humanVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><span>В русскоязычной википедии представлены две статьи, разъясняющие данный вопрос. Привожу обе в кратком содержаним.</span><br><br><p>Челове́к — общественное существо, обладающее разумом и сознанием, а также субъект общественно-исторической деятельности и культуры. Возник на Земле в результате эволюционного процесса — антропогенеза, детали которого продолжают изучаться. Специфическими особенностями человека, отличающими его от других животных, являются прямохождение, высокоразвитый головной мозг, мышление и членораздельная речь.</p><br><p>Человек изучает и изменяет себя и окружающий мир, создаёт культуру и собственную историю. Сущность человека, его происхождение и назначение, занимаемое им место в мире были и остаются основными проблемами философии, религии, науки и искусства.</p><br><p>И. Т. Фролов и В. Г. Борзенков в «Новой философской энциклопедии» указывают, что можно выделить не менее четырёх подходов к определению понятия (термина) «человек»:</p><br><span>Человек в естественной систематике животных;<br>человек как сущее, выходящее за рамки живого мира и в известной мере противостоящее ему;<br>человек в смысле «человеческий род»;<br>человек как индивид, личность.</span><br><br><p>Отличительные черты человека: возможность мыслить и способность к осуществлению свободного выбора, принимать ответственность за поступки, наличие моральных суждений. Описывая человека, отмечают его биологическую неприспособленность, отсутствие специализации его органов для какого-либо конкретного простого животного существования, способность производить орудия труда, огонь, и использовать их, дар речи, пластичность поведения. Не известно ни одного другого существа, которое имеет высшие эмоции, традиции, способность мыслить, утверждать, отрицать, считать, планировать, знает о своей смертности, любит в настоящем смысле этого слова, обладает чувством юмора, осуществляет свои замыслы, воспроизводит имеющееся и создаёт что-то новое. </p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA">https://ru.wikipedia.org/wiki/Человек</a><br><br><p>Челове́к разу́мный (лат. Homo sapiens; преимущественно лат. Homo sapiens sapiens) — вид рода Люди (Homo) из семейства гоминид в отряде приматов. В начале верхнего палеолита, около 40 тысяч лет назад, его ареал уже охватывает практически всю Землю. От остальных современных человекообразных, помимо ряда анатомических особенностей, отличается относительно высоким уровнем развития материальной и нематериальной культуры (включая изготовление и использование орудий труда), способностью к членораздельной речи и крайне развитому абстрактному мышлению. Человек как биологический вид является предметом исследования физической антропологии. И на сегодняшний день не осталось ни одной стороны или свойства человека как особи, индивида или члена человеческой популяции, которые бы не были охвачены специальными научными исследованиями. Основные дисциплины, изучающие человека и человечество:</p><br><span>Антропология<br>Биология человека<br>Генеалогия<br>Геногеография<br>История<br>Лингвистика<br>Медицина<br>Психология<br>Культурология<br>Социология<br>Этнография<br>Этология</span><br><br><p>Тем не менее с древних времён и до наших дней природа и сущность человека являются предметом философского и религиозного диспута.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA_%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%BD%D1%8B%D0%B9">https://ru.wikipedia.org/wiki/Человек разумный</a><br><br><a href="https://youtu.be/3mai-GNTi3g"></a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3mai-GNTi3g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var razumVar = 0;

function razum() {

	var n = "razum";
	var m = "razum2";
	var l = "razum1";

	if (razumVar === 0) {
		view(n, m, l);
		razumVar++;
	} else {
		close(n, m, l);
		razumVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Ра́зум (лат. ratio), ум (греч. νους) — философская категория, выражающая высший тип мыслительной деятельности, способность мыслить всеобще, способность анализа, абстрагирования и обобщения.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D1%83%D0%BC">https://ru.wikipedia.org/wiki/Разум</a><br><br><p>Мышле́ние — это познавательная деятельность человека. Оно является опосредованным и обобщённым способом отражения действительности.</p><br><p>Результатом мышления является мысль (понятие, смысл, идея). Мышление противопоставляют «низшим» способам освоения мира в форме ощущения или восприятия, которые свойственны в том числе и животным. Многие философы называли мышление сущностным свойством человека. Так Декарт утверждал: «Я мыслю, следовательно, я существую». Паскаль называл человека мыслящим тростником.</p><br><p>Особенностью мышления является свойство получать знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты. Это свойство мышления осуществляется посредством таких умозаключений как аналогия и дедукция.</p><br><p>Мышление связано с функционированием мозга, однако сама способность мозга к оперированию абстракциями возникает в ходе усвоения человеком форм практической жизни, норм языка, логики, культуры. Мышление осуществляется в многообразных формах духовной и практической деятельности, в которых обобщается и сохраняется познавательный опыт людей. Мышление осуществляется в образно-знаковой форме, основные результаты его активности выражаются здесь в продуктах художественного (прим. философского, математического, научного, инженерного) и религиозного творчества, своеобразно обобщающих познавательный опыт человечества. Мышление осуществляется также в собственной адекватной ему форме теоретического познания, которое с опорой на предшествующие формы приобретает неограниченные (?) возможности умозрительного и модельного видения мира.</p><br><p>Мышление изучается почти всеми существующими научными дисциплинами, являясь в то же время объектом исследования ряда философских дисциплин — логики, гносеологии, диалектики.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5">https://ru.wikipedia.org/wiki/Мышление</a><br><br><p>Мышление — психический процесс моделирования закономерностей окружающего мира на основе аксиоматических положений. Однако в психологии существует множество других определений.</p><br><p>Например: высший этап обработки информации человеком, процесс установления связей между объектами или явлениями окружающего мира; или — процесс отражения существенных свойств объектов, а также связей между ними, что приводит к появлению представлений об объективной реальности. Споры по поводу определения продолжаются по сей день.</p><br><p>В патопсихологии и нейропсихологии мышление относят к одной из высших психических функций. Оно рассматривается как деятельность, имеющая мотив, цель, систему действий и операций, результат и контроль.</p><br><p>Мышление — высшая ступень человеческого познания; процесс познания окружающего реального мира, основу которого составляет образование и непрерывное пополнение запаса понятий, представлений; включает в себя вывод новых суждений (осуществление умозаключений). Мышление позволяет получить знание о таких объектах, свойствах и отношениях окружающего мира, которые не могут быть непосредственно восприняты при помощи первой сигнальной системы. Формы и законы мышления составляют предмет рассмотрения логики, а психофизиологические механизмы — соответственно, психологии и физиологии.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F)">https://ru.wikipedia.org/wiki/Мышление_(психология)</a><br><br><a href="https://youtu.be/3drHAhc5P9A">https://youtu.be/3drHAhc5P9A</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/3drHAhc5P9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}

var neuralCircuitVar = 0;

function neuralCircuit() {

	var n = "neuralCircuit";
	var m = "neuralCircuit2";
	var l = "neuralCircuit1";

	if (neuralCircuitVar === 0) {
		view(n, m, l);
		neuralCircuitVar++;
	} else {
		close(n, m, l);
		neuralCircuitVar--;
	}

	function view(n, m, l) {
		document.getElementById(n).innerHTML = '<div class="spoilerText"><p>Нейронная сеть (биологическая нейронная сеть) — совокупность нейронов головного и спинного мозга центральной нервной системы (ЦНС) и ганглия периферической нервной системы (ПНС), которые связаны или функционально объединены в нервной системе, выполняют специфические физиологические функции.</p><br><p>Нейронная сеть состоит из группы или групп химически или функционально связанных нейронов. Один нейрон может быть связан со многими другими нейронами, а общее количество нейронов и связей в сети может быть достаточно большим. Место контакта нейронов называется синапсом, типичный синапс — аксо-дендритический химический. Передача импульсов осуществляется химическим путём с помощью медиаторов или электрическим путём посредством прохождения ионов из одной клетки в другую.</p><br><p>Представление о нейронных сетях оказало значительное влияние на технологии искусственного интеллекта, в попытке построить математическую модель нейронной сети был создан обширный инструментарий искусственных нейронных сетей, широко используемый в прикладной математике и информатике.</p><br>Источник:<br><a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B5%D1%82%D1%8C">https://ru.wikipedia.org/wiki/Нейронная_сеть</a><br><br><a href="https://www.youtube.com/watch?v=SnIoGkixxLo">https://www.youtube.com/watch?v=SnIoGkixxLo</a><br><div class="resp-videocontainer"><iframe class="resp-iframe" src="https://www.youtube.com/embed/SnIoGkixxLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen"></iframe></div></div><br>';
		document.getElementById(m).innerHTML = document.getElementById(l).innerHTML;
		//document.getElementById(m).setAttribute("class", "spoilerWord");
		document.getElementById(m).setAttribute("class", "spoilerWordActive");
		document.getElementById(l).setAttribute("class", "spoilerWordActive");
	}

	function close(n, m, l) {
		document.getElementById(n).innerHTML = '';
		document.getElementById(m).innerHTML = '';
		var element = document.getElementById(l);
		document.getElementById(l).setAttribute("class", "spoilerWord");
		element.scrollIntoView();
	}
}