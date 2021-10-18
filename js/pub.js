
/*
Exercice : questions de quiz
*/
var text = new Blotter.Text("Augmenter votre CA avec le web!", {
            family: 'Montserrat',
            size: 60,
            fill: 'red',
            paddingLeft: 120,
            paddingRight: 0,
        })

        var material = new Blotter.SlidingDoorMaterial();
        material.uniforms.uDivisions.value = 3;
        material.uniforms.uDivisionWidth.value = .09;
        material.uniforms.uAnimateHorizontal.value = 1;
        material.uniforms.uFlipAnimationDirection.value = 1;
        material.uniforms.uSpeed.value = .2;


        var blotter = new Blotter(material, {
            texts: text
        })

        // Apply to element
       let scope = blotter.forText(text);
       let elem = document.getElementById('slogan');
       scope.appendTo(elem);

var text1 = new Blotter.Text("Baisser vos coûts avec l'intelligence artificielle!", {
            family: 'Montserrat',
            size: 60,
            fill: 'red',
            paddingLeft: 0,
            paddingRight: 0,
        })

        var material1 = new Blotter.SlidingDoorMaterial();
        material1.uniforms.uDivisions.value = 3;
        material1.uniforms.uDivisionWidth.value = .09;
        material1.uniforms.uAnimateHorizontal.value = 1;
        material1.uniforms.uFlipAnimationDirection.value = 1;
        material1.uniforms.uSpeed.value = .2;


        var blotter1 = new Blotter(material1, {
            texts: text1
        })

        // Apply to element
       let scope1 = blotter1.forText(text1);
       let elem1 = document.getElementById('reduction');
       scope1.appendTo(elem1);

