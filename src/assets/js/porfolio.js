( function( $ ) {
    "use strict";

    var THE_TATTOOIST = window.THE_TATTOOIST || {};


    /*-------------------------------------------------------------------*/
    /*      Scraps Popup Magníficos
    /*-------------------------------------------------------------------*/

    THE_TATTOOIST.magnificPopup = function(){

        // imagem aberta
        $('.zoom').magnificPopup({
            type: 'image'
        });

        // abra o formulário em um pop-up
        $('.btn-popup').magnificPopup({
            type: 'inline',
        });

    },

    /*-------------------------------------------------------------------*/
    /*      Substitua cada seleção por um menu suspenso personalizado
    /*-------------------------------------------------------------------*/

    THE_TATTOOIST.selectReplacer = function(){

        $('select').each(function() {
            var $select = $(this),
                $ul = $('<ul></ul>').addClass('select-replacer'),
                $hiddenInput = $('<input type="hidden" name="' + $select.attr('name') + '" value="' + $select.val() + '">');

            $select.after($ul);
            $ul.after($hiddenInput);

            $select.children('option').each(function(){
                var $that = $(this),
                    $li = $('<li data-value="' + $that.val()+'">' + $that.text() + '</li>');
                if ( $that.attr('class') != undefined ) {
                    $li.addClass($that.attr('class'));
                }
                $ul.append($li);
            });

            $ul.children('li').not(':first').hide();

            $ul.children('li').on('click',function(){
                var $clickedLi = $(this),
                    dataValue = $clickedLi.data('value');
                $clickedLi.prependTo($ul.toggleClass('open')).nextAll().toggle();
                $hiddenInput.val(dataValue);
                $('.hidden-field').removeClass('show').find('input').removeClass('required');
                $('#' + $clickedLi.attr('class')).addClass('show').find('input').addClass('required');
            });

            $select.remove();

            //feche a lista clicando fora dela
            $(document).on('click',function(e){

                if ( ! $ul.find(e.target).length ) {
                    $ul.removeClass('open').children('li').not(':first').hide();

                }

            });

        });

    },

    /*-------------------------------------------------------------------*/
    /*      Alternancia
    /*-------------------------------------------------------------------*/

    THE_TATTOOIST.toggle = function(){

        $('.open .content-toggle').show();
        $('.title-toggle').on('click',function(e){
            e.preventDefault();

            var $that = $(this),
                $toggle = $that.parent(),
                $contentToggle = $that.next(),
                $accordion = $that.parents('.accordion');

            if ( $accordion.length > 0 ) {
                $accordion.find('.content-toggle').slideUp('normal', function(){
                    $(this).parent().removeClass('open');
                });
                if ( $that.next().is(':hidden') ) {
                    $contentToggle.slideDown('normal', function(){
                        $toggle.addClass('open');
                    });
                }
            } else {
                $contentToggle.slideToggle('normal', function(){
                    $toggle.toggleClass('open');
                });
            }
        });

    },

    /*-------------------------------------------------------------------*/
    /*      Tabs
    /*-------------------------------------------------------------------*/

    THE_TATTOOIST.tabs = function(){

        $('.title-tab:first-child').addClass('selected-tab');
        $('.title-tab').on('click',function(e){
            e.preventDefault();

            var $that = $(this),
                $tabParent = $that.parents('.tabs'),
                idTab = $that.find('a').attr('href');

            if ( ! $that.hasClass('selected-tab') ) {
                $tabParent.find('.tab').hide().removeClass('open');
                $tabParent.find('.title-tab').removeClass('selected-tab');
                $that.addClass('selected-tab');
                $(idTab).fadeIn().addClass('open');
            }

        });

    },

    /*-------------------------------------------------------------------*/
    /*      Layout de portfólio
    /*-------------------------------------------------------------------*/

    THE_TATTOOIST.portfolio = {

        init : function(){

            this.layout();
            this.filters();
            this.infoItems();

        },

        // construir o layout do portfólio
        layout : function(){

            $('.works').imagesLoaded( function() {
                $('.works').isotope();
            });

        },

        // Filtrar itens no botão clicar
        filters : function(){

            $('.filters').on( 'click', 'a', function(e) {
                e.preventDefault();

                var $that = $(this),
                    filterValue = $that.attr('data-filter');

                $('.filters a').removeClass('light');
                $that.addClass('light');
                $('.works').isotope({ filter: filterValue });
            });

        },

        // abrir / fechar informações do item do portfólio
        infoItems : function(){

            $('.info-link').on('click',function(e){
                e.preventDefault();

                var $that = $(this),
                    $extraItem = $that.parents('.work-thumb').next('.info-work');

                if ($extraItem.length > 0) {
                    $extraItem.slideToggle( 200, function(){
                        $(this).parents('.work').toggleClass('opened');
                        $('.works').isotope('layout');
                    });
                }

            });

        }

    },
    /*-------------------------------------------------------------------*/
    /*      Inicialize todas as funções
    /*-------------------------------------------------------------------*/

    $(document).ready(function(){

        THE_TATTOOIST.magnificPopup();
        THE_TATTOOIST.selectReplacer();
        THE_TATTOOIST.toggle();
        THE_TATTOOIST.tabs();
        THE_TATTOOIST.portfolio.init();

    });

    // Janela redimensionar scripts
    $(window).resize(function() {

        THE_TATTOOIST.portfolio.layout();

    });

} )( jQuery );