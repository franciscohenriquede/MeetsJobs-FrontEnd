function logout() {
    localStorage.removeItem('Token');
   localStorage.removeItem('userName');
   window.location.href = '../home/index.html'; // Redireciona para login após logout
 }



