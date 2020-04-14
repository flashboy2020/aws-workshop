# aws-workshop
Code examples for workshop 


## AWS clean up 

Remove checklist:
- ec2 instances
- dynamoDb tables
- api gateway routes


AWS API Gateway allows only one removal per minute, which makes cleaning up after workshop a bit difficult. 


Use aws-clean-up/index.js to remove all apis and dynamodb tables created in all regions. 

## Cloudformation 
### All-in-one
cd cloudformation
./run-cf.sh redeploy - delete stack if exists (if doesn't - show some error in log), upload lambda code to S3 bucket (has to be created beforehand), 
creates stack and prints out the endpoint url. Runs basic api test 

Known issue: sometimes during the packaging lambda and generating template, some log lines getting added into template. 
In result the stack creation step fails. Remove these lines manually and restart command. 

### Individual commands 

./run-cf.sh package-lambda - package lambda in zip and push to S3. result is generated CF template in cloudformation/build folder with link to S3 
./run-cf.sh create-stack - create stack with CF template generated in prev step 
./run-cf.sh delete-stack - delete stack 