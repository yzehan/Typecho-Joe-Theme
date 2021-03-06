(function (i) {
    i.fn.fakeLoader = function (c) {
        var d = i.extend(
                {
                    timeToHide: 1200,
                    zIndex: '99999',
                    bgColor: '#2ecc71',
                    spinner: 'spinner7',
                    imagePath: ''
                },
                c
            ),
            e = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            l = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
            n = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
            v = '<div class="fl spinner4"></div>',
            a = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
            r = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
            t = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',
            o = i(this),
            h = {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center'
            };
        return (
            o.css(h),
            o.each(function () {
                var i = d.spinner;
                switch (i) {
                    case 'spinner1':
                        o.html(e);
                        break;
                    case 'spinner2':
                        o.html(l);
                        break;
                    case 'spinner3':
                        o.html(n);
                        break;
                    case 'spinner4':
                        o.html(v);
                        break;
                    case 'spinner5':
                        o.html(a);
                        break;
                    case 'spinner6':
                        o.html(r);
                        break;
                    case 'spinner7':
                        o.html(t);
                        break;
                    default:
                        o.html(e);
                }
                '' != d.imagePath && (o.html('<div class="fl"><img src="' + d.imagePath + '"></div>'), s());
            }),
            setTimeout(function () {
                i(o).fadeOut();
            }, d.timeToHide),
            this.css({ backgroundColor: d.bgColor, zIndex: d.zIndex })
        );
    };
})(jQuery);
