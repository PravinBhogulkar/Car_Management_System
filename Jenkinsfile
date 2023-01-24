pipeline{
//   agent {
//     docker {
//       image 'pravinbhogulkar/codewithpravinbhogulkar:todo'
//     }
//   }
  agent any
  stages{
    stage('build'){
      steps{
        echo 'Hello World'
        sh 'git pull origin main'
        sh 'docker build .'
        sh 'docker run -p 4200:4200 '
      }
    }
  }
}
