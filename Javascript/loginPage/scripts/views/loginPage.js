views.loginPage = () => {
  return /*html*/ `
  <div class="login-container">
      <h1 class="login-title">Sign In</h1>
  
      <div class="form-input-group">
        <span class="material-symbols-outlined">person</span>
        <input type="text" class="login-input" placeholder="username or email"><br>
        <span class="material-symbols-outlined">lock</span>
        <input type="password" class="login-input" placeholder="password"><br>
        <button class="login-btn"><span>Log In</span></button><br>
        <a class="click-text" href="https://youtu.be/l3MtqWz4XuE?t=32" target="blank_">forgot your password?</a>
        <a class="click-text" onclick="render('createAccount')">create an account</a>
      </div>
  </div>
  `;
};