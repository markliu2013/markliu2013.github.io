$(function() {

    $('.editor-field').on('click', function(e) {
        var $target = $(this);
        if ($target.hasClass('focused')) {
            $target.addClass('editing-state');
            if ($target.hasClass('inited')) {
                var preValue = $target.find('.field-value').text();
                $target.find('input').val(preValue);
            } else {
                $target.find('input').val('');
            }
            $target.find('input').focus();
            $target.removeClass('focused');
        } else if (!$target.hasClass('editing-state')) {
            $target.addClass('focused');
        }
        e.stopPropagation();
    });

    $('.location-field .input-wrap .save-icon').on('click', function(e) {
        var $targetWrap = $(this).parents('.editor-field');
        var inputValue = $targetWrap.find('input').val();
        if (inputValue) {
            $targetWrap.addClass('validating');
            //ajax send here, error handle here
            setTimeout(function() {
                $targetWrap.find('.field-value').text('Portland, Oregon, USA');//value get from ajax response
                $targetWrap.addClass('inited');
                $targetWrap.removeClass('editing-state');
                $targetWrap.removeClass('validating');
            }, 2000);
        }

        e.stopPropagation();
    });

    $('.name-field .input-wrap .save-icon, .language-field .input-wrap .save-icon').on('click', function(e) {
        var $targetWrap = $(this).parents('.editor-field');
        var inputValue = $targetWrap.find('input').val();
        if (inputValue) {
            $targetWrap.find('.field-value').text(inputValue);
            $targetWrap.addClass('inited');
        }
        $targetWrap.removeClass('editing-state');
        e.stopPropagation();
    });

    $('.skills-field .input-wrap .save-icon').on('click', function(e) {
        var $targetWrap = $(this).parents('.editor-field');
        var inputValue = $targetWrap.find('input').val();
        var selectValue = $targetWrap.find('select').val();
        if (inputValue) {
            var skillHtml = '<a href="#" class="btn is-'+selectValue+'">'+inputValue+'</a>';
            $('#skills-added').append(skillHtml);
        }
        $targetWrap.removeClass('editing-state');
        e.stopPropagation();
    });

    $('#skills-added').delegate('a', 'click', function(e) {
        $(this).remove();
        e.preventDefault();
        e.stopPropagation();
    });

    $('.editor-field input').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $(this).next('.save-icon').trigger('click');
            e.stopPropagation();
        }
    });

    $('.skills-field .input-wrap select').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $(this).prev('.save-icon').trigger('click');
            e.stopPropagation();
        }
    });

    $('#avatar-file-input').on('change', function() {
        if (this.files && this.files[0] && this.files[0].type.indexOf('image') >= 0) {
            $('#avatar-editor').addClass('selected');
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#avatar-editor .avatar-editor-placeholder').html('<img src="'+e.target.result+'">');
            }
            reader.readAsDataURL(this.files[0]);
        } else {
            $('#avatar-editor').removeClass('selected');
        }
    });

    $('#avatar-editor').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    $('#resume-portfolia-section').on('click', function(e) {
        var $target = $(this);
        $target.addClass('focused')
    });

    $('#resume-amazing-section').on('click', function(e) {
        var $target = $(this);
        $target.addClass('focused')
    });

    $('#save-portfolia-icon').on('click', function(e) {
        var portfoliaHtml = '';
        var projectSkillHtml = '';
        $('#resume-portfolia-editor-list li').each(function(index, ele) {
            var projectName = $(ele).find('.input-project-name').val();
            var projectSkill = $(ele).find('.input-project-skills').val();
            if (!projectSkillHtml) projectSkillHtml = projectSkill;
            if (projectName) {
                if (!projectSkill) projectSkill = '';
                portfoliaHtml += '<li>'+projectName+', <span class="item-tag">'+projectSkill+'</span></li>';
            }
        });
        if (portfoliaHtml) {
            $('#resume-portfolia-section-content').html('<ul>'+portfoliaHtml+'</ul');
            $('#resume-portfolia-section .heading p').html(projectSkillHtml);
            $('#resume-portfolia-section-content').addClass('has-content');
        }
        $('#resume-portfolia-section').removeClass('focused');
        e.stopPropagation();
    });

    $('#save-amazing-icon').on('click', function(e) {
        var amazingContent = $('#resume-amazing-textarea').val();
        if (amazingContent) {
            $('#resume-amazing-section-content').html('<blockquote><p>' + amazingContent + '</p></blockquote>');
            $('#resume-amazing-section-content').addClass('has-content');
        }
        $('#resume-amazing-section').removeClass('focused');
        e.stopPropagation();
    });
    $(document).on('click', function(e) {
        $('.editor-field').each(function(index, ele) {
            var $ele = $(ele);
            if ($ele.hasClass('focused')) {
                $ele.removeClass('focused');
            } else if ($ele.hasClass('editing-state')) {
                $ele.find('.input-wrap .save-icon').trigger('click');
            }
        });
        e.stopPropagation();
    });

});