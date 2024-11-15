FROM mcr.microsoft.com/playwright:v1.48.1-noble

RUN apt-get update && \
    apt-get install -y curl gnupg2 default-jdk && \
    curl -o allure-2.24.1.tgz -OL https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.24.1/allure-commandline-2.24.1.tgz && \
    tar -zxvf allure-2.24.1.tgz -C /opt/ && \
    ln -s /opt/allure-2.24.1/bin/allure /usr/bin/allure && \
    export JAVA_HOME=$(readlink -f /usr/bin/java | sed "s:/bin/java::") && \
    echo "export JAVA_HOME=$JAVA_HOME" >> /etc/profile

ENV JAVA_HOME=/usr/lib/jvm/default-java
ENV PATH=$JAVA_HOME/bin:$PATH

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/allure-results

CMD ["npm", "test"]
