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
//         sh 'docker version'
        echo 'Git Pull'
        sh 'git pull origin main'
 echo 'Docker Build'
        sh 'docker build .'
        echo 'Docker Run'
        sh 'docker run -p 4200:4200 '
      }
    }
  }
}
