views.createAccount = () => {
    return /*html*/`
    <div class="login-container">
    <h1 class="login-title">Create Account</h1>

    <div class="form-input-group">
      <span class="material-symbols-outlined">person</span>
      <input type="text" class="login-input" placeholder="username" oninput="model.inputs.userSignup.username = this.value" onchange="validateUsernameInput(this)" required><br>

      <span class="material-symbols-outlined">mail</span>
      <input type="email" class="login-input" placeholder="email" oninput="validateEmailInput(this)" required><br>

      <span class="material-symbols-outlined">lock</span>
      <input type="password" class="login-input" placeholder="password" oninput="validatePasswordInput(this)" required><br>

      <span class="material-symbols-outlined">sync_lock</span>
      <input type="password" class="login-input" placeholder="confirm password" oninput="validatePasswordInput(this)" required><br>

      <button class="login-btn" onclick="createNewUser()"><span>Create</span></button><br>

      <a class="click-text" onclick="render('loginPage')">already have an account?</a>
    </div>
</div>
`;
};