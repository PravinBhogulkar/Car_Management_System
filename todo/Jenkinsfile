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
//         sh 'git clone https://github.com/PravinBhogulkar/Car_Management_System.git'
 echo 'Docker Build'
        bat 'docker build .'
        echo 'Docker Run'
        bat 'docker run -p 4200:4200 '
      }
    }
  }
}
