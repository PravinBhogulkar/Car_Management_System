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
        docker version
        echo 'Git Pull'
//         sh 'git clone https://github.com/PravinBhogulkar/Car_Management_System.git'
        echo 'Checking Directory'
        bat 'dir'
        echo 'Changing Directory'
        bat 'cd todo'
        bat 'dir'
        echo 'Docker Build'
        bat 'docker build .'
        echo 'Docker Run'
        bat 'docker run -p 4200 pravinbhogulkar/codewithpravinbhogulkar:todo'
      }
    }
  }
}
