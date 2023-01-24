pipeline{
  agent {
    docker {
      image 'pravinbhogulkar/codewithpravinbhogulkar:todo'
    }
  }
  stages{
    stage('build'){
      steps{
        echo 'Hello World'
        sh 'docker run -p 4200:4200 '
      }
    }
  }
}
