document.addEventListener('DOMContentLoaded', function() {
    const step1 = document.querySelector('.step1');
    const step2 = document.querySelector('.step2');
    const nextStep = document.querySelector('.next-step');
    const backStep = document.querySelector('.back_step');
    const submitButton = document.querySelector('.submit');
    const form = document.getElementById('step_form1');

    // Step 1 から Step 2 へ
    nextStep.addEventListener('click', function() {
        if (validateStep1()) {
            step1.style.display = 'none';
            step2.style.display = 'block';
            document.querySelector('.number_step2').classList.add('active');
        }
    });

    // Step 2 から Step 1 へ戻る
    backStep.addEventListener('click', function() {
        step2.style.display = 'none';
        step1.style.display = 'block';
        document.querySelector('.number_step2').classList.remove('active');
    });

    // ラジオボタンの挙動
    const radioInputs = document.querySelectorAll('.radio_input');
    radioInputs.forEach((input, index) => {
        input.addEventListener('click', function() {
            radioInputs.forEach(ri => ri.classList.remove('check'));
            this.classList.add('check');
            document.querySelectorAll('input[name="00N5i00000INHtf"]')[index].checked = true;
        });
    });

    // フォーム送信
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateStep2()) {
            // ここでフォームを送信するか、APIを呼び出す
            console.log('フォーム送信成功');
            alert('フォームが送信されました！');
            // 実際の送信処理はここに追加します
            // form.submit();
        }
    });

    // Step 1 のバリデーション
    function validateStep1() {
        const prefecture = document.getElementById('00N5i00000INIB9').value;
        const experience = document.getElementById('00N5i00000INHtk').value;
        if (prefecture === '' || experience === '') {
            alert('全ての必須項目を入力してください。');
            return false;
        }