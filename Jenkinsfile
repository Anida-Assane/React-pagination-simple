pipeline {
  agent any
  stages {
    stage('pull code') {
      steps {
        bat 'git pull origin main'
      }
    }

    stage('build') {
      steps {
        bat 'npm install'
        bat 'yarn build'
      }
    }

  }
}