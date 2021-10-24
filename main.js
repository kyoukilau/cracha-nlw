const LinksSocialMedia = {
  github: 'kyoukilau',
  twitter: 'kyoukilau',
  instagram: 'yagamilau'
}

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      //const social = li.getAttribute('class')

    li.children[0].href = 'https://instagram.com/yagamilau'
    

    }
  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos() {
const url = `https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url).then()
      .then(response=> response.json())
      .then(data => {
        userName.textContent = data.userNameuser
        userBio.textContent = data.userBio
        
      })
  }
  getGitHubProfileInfos()