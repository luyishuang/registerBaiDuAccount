$(function () {
    //get dom elem
    var $username = $('#TANGRAM__PSP_4__userName'),
        $usernameerror = $('#TANGRAM__PSP_4__userNameError'),
        $phonenumber = $('#TANGRAM__PSP_4__phone'),
        $phonenumbererror = $('#TANGRAM__PSP_4__phoneError'),
        $password = $('#TANGRAM__PSP_4__password'),
        $passworderror = $('#TANGRAM__PSP_4__passwordError'),
        $verifycode = $('#TANGRAM__PSP_4__verifyCode'),
        $verifycodeerror = $('#TANGRAM__PSP_4__verifyCodeError'),
        $verifycodesend = $('#TANGRAM__PSP_4__verifyCodeSend'),
        $submit = $('#TANGRAM__PSP_4__submit'),
        $form = $('#TANGRAM__PSP_4__form'),
        validCode = true,
        num = 3;

    //获取验证码
    $verifycodesend.click(function () {
        if (validCode) {
            validCode = false;
            timer = setInterval(function () {
                num--;
                if (num === 0) {
                    clearInterval(timer);
                    $verifycodesend.val('获取验证码');
                    $verifycode.addClass("pass-text-input-error");
                        $verifycodeerror.text("请求超时，请稍后再试");
                        $verifycodeerror.css("display", "block");
                        validCode = true;
                        num = 3;
                } else {
                    $verifycodesend.val('（' + num + 's）后重发');
                }
            }, 1000);
        }
    });

    //用户名验证
    function checkUsername(){
        var value = $username.val();
        if (value === '') {
            return 1;
        }
        var reg = /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
        if (reg.test(value) === false) {
            $username.addClass("pass-text-input-error");
            $usernameerror.text("用户名仅支持中英文、数字和下划线,且不能为纯数字");
            $usernameerror.css("display", "block");
            return -1;
        }
        return 0;
    };

    //手机号验证
    function checkPhonenumber(){
        var value = $phonenumber.val();
        if (value === '') {
            return 1;
        }
        var reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/;
        if (reg.test(value) === false) {
            $phonenumber.addClass("pass-text-input-error");
            $phonenumbererror.text("手机号码格式不正确");
            $phonenumbererror.css("display", "block");
            return -1;
        }
    };

    //密码验证
    function checkPassword(){
        var value = $password.val();
        if (value === '') {
            return 1;
        }
        var reg = /((?=.*\D)(?=.*\d)|(?=.*[^a-zA-Z](?=.*[a-zA-Z])))(?!^.*[\u4e00-\u9fa5].*$)^\S{8,14}$/;
        if (reg.test(value) === false) {
            $password.addClass("pass-text-input-error");
            $passworderror.text("密码设置不符合要求");
            $passworderror.css("display", "block");
            return -1;
        }
    };

    //验证码验证
    function checkVerifycode(){
        var value = $verifycode.val();
        if (value === '') {
            return 1;
        }
    };


    // 失去焦点提示
    //用户名
    $username.blur(function () {
        checkUsername();
    });

    //手机号
    $phonenumber.blur(function () {
        checkPhonenumber();
    });

    //密码
    $password.blur(function () {
        checkPassword();
    });

    //验证码
    $password.blur(function () {
        checkVerifycode();
    });
    

    // 获取焦点提示消失
    ///用户名
    $username.focus(function () {
        $username.removeClass('pass-text-input-error');
        $usernameerror.text('');
        $usernameerror.css("display", "none");
    });

    //手机号
    $phonenumber.focus(function () {
        $phonenumber.removeClass('pass-text-input-error');
        $phonenumbererror.text('');
        $phonenumbererror.css("display", "none");
    });

    //密码
    $password.focus(function () {
        $password.removeClass('pass-text-input-error');
        $passworderror.text('');
        $passworderror.css("display", "none");
    });

    //验证码
    $verifycode.focus(function () {
        $verifycode.removeClass('pass-text-input-error');
        $verifycodeerror.text('');
        $verifycodeerror.css("display", "none");
    });

    // 表单级别验证
    $form.submit(function () {
        event.preventDefault();
        if (checkUsername() === 1) {
            $username.addClass("pass-text-input-error");
            $usernameerror.text("用户名仅支持中英文、数字和下划线,且不能为纯数字");
            $usernameerror.css("display", "block");
        }
        if (checkPhonenumber() === 1) {
            $phonenumber.addClass("pass-text-input-error");
            $phonenumbererror.text("手机号码格式不正确");
            $phonenumbererror.css("display", "block");
        }
        if (checkPassword() === 1) {
            $password.addClass("pass-text-input-error");
            $passworderror.text("密码设置不符合要求");
            $passworderror.css("display", "block");
        }
        if (checkVerifycode() === 1) {
            $verifycode.addClass("pass-text-input-error");
            $verifycodeerror.text("验证码不能为空");
            $verifycodeerror.css("display", "block");
        }
    });

});