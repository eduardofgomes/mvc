$(document).ready(function(){

    $('#pw')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/pw.jpg');
        $('#titalo')
          .text("Programação Web");
        $('#ddd')
          .text("Foco em desenvolvimento de sites, na Internet ou numa intranet. O profissional que trabalha desenvolvendo websites pode ser um web designer ou um web developer.");
  
    });

    $('#ds')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/ds.jpg');
        $('#titalo')
          .text("Desenvolvimento de Sistemas");
        $('#ddd')
          .text("Desenvolvimento de Sistemas é a área profissional responsável por dar uma solução informatizada a um problema, como a criação de um software, um aplicativo ou um banco de dados.");
  
    });

    $('#bd')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/bd.jpg');
        $('#titalo')
          .text("Banco de dados");
        $('#ddd')
          .text("Bancos de dados são conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. São coleções organizadas de dados que se relacionam de forma a criar algum sentido e dar mais eficiência durante uma pesquisa ou estudo científico.");
  
    });

    $('#pam')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha').attr('src', 'img/pam.jpg');
        $('#titalo').text("Programação de Aplicativos Mobile");
        $('#ddd').text("O desenvolvimento mobile engloba o desenvolvimento de aplicativos para smartphones, tablets, smartwatches e todos os outros tipos de dispositivos wearables que executam algum tipo de sistema operacional móvel.");
  
    });

    $('#dd')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/dd.jpg');
        $('#titalo')
          .text("Design Digital");
        $('#ddd')
          .text("É um ramo do design gráfico, onde os indivíduos produzem multimídia para visualização na tela. Suas tarefas são semelhantes às dos designers gráficos, com um conjunto de habilidades expandido no uso de ferramentas digitais.");
  
    });

    $('#tpa')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/tpa.jpg');
        $('#titalo')
          .text("Teoria de Programção");
        $('#ddd')
          .text("Envolve a técnica de desenvolver algoritmos (sequências lógicas) para atingir determinados objetivos dentro de certas regras baseadas na Lógica matemática e em outras teorias básicas da Ciência da Computação");
  
    });

    $('#fi')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/fi.jpg');
        $('#titalo')
          .text("Fundamentos da Informática");
        $('#ddd')
          .text("Têm como objetivo conhecer conceitos básicos de informática; conhecer a evolução e história dos computadores; Diferenciar os tipos de memórias; Entender os tipos de dispositivos de hardware; Compreender uma informação e sua representação no sistema numérico; Entender as operações aritméticas entre outros.");
  
    });

    $('#aps')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/aps.jpg');
        $('#titalo')
          .text("Análise e Projeto de Sistemas");
        $('#ddd')
          .text("É uma área da computação que visa descrever as funções de um sistema, verificar sua funcionalidade, elaborar e implementar soluções para diferentes problemas identificados durante a fase de análise.");
  
    });

    $('#comum')
      .click(function(event){
  
        event.preventDefault()
        
        $('#fotinha')
          .attr('src', 'img/comum.jpg');
        $('#titalo')
          .text("Matérias base comum");
        $('#ddd')
          .text("Conta com materias da base comum curricular, como matemática, física, português, história, geografia e biologia.");
  
    });



})