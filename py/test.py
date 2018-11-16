import requests

# listProperty = {
#   "propertyType": "HDB",
#   "loanType"    : None,
#   "partyId"     : "SVcwMzY=",
#   "clientId"    : "iw036",
#   "accessToken" : "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tIiwiaWF0IiA6IDE1NDIzNDA3MzM2NTEsICJleHAiIDogMTU0MjM0NDMzMzY1MSwic3ViIiA6ICJTVmN3TXpZPSIsInB0eXR5cGUiIDogMSwiY2xuaWQiIDogImRiMGNmMTQyLTViOTEtNDQwYy05OTQwLThkMTgyYzc0Y2U2MyIsImNsbnR5cGUiIDogIjIiLCAiYWNjZXNzIiA6ICIxRkEiLCJzY29wZSIgOiAiMkZBLVNNUyIgLCJhdWQiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tL2FjY2VzcyIgLCJqdGkiIDogIjE3NjA2Mzc5Nzg0OTc0ODQyNjYiICwiY2luIiA6ICJRMGxPTURBd01EQXgifQ.MxGbPq1zEyp65l0lKNHQNhmcMQatkqglkUtTrzj5llY",
#   "accept-version" : None,
#   "uuid" : None
#   }

# response = requests.get("https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=db0cf142-5b91-440c-9940-8d182c74ce63&redirect_uri=https%3A%2F%2Fwww.dbs.com%2Fdevelopers%2F%23%2Fall-products%2Fplay-ground&scope=Read&response_type=code&state=0399", listProperty)
# print(response.json())

# query = {
#   "propertyType" = "HDB"
# }
# headers = {"accessToken":"eyJhbGciOiJIUzI1NiJ9.eyJpc3MiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tIiwiaWF0IiA6IDE1NDIzNDA3MzM2NTEsICJleHAiIDogMTU0MjM0NDMzMzY1MSwic3ViIiA6ICJTVmN3TXpZPSIsInB0eXR5cGUiIDogMSwiY2xuaWQiIDogImRiMGNmMTQyLTViOTEtNDQwYy05OTQwLThkMTgyYzc0Y2U2MyIsImNsbnR5cGUiIDogIjIiLCAiYWNjZXNzIiA6ICIxRkEiLCJzY29wZSIgOiAiMkZBLVNNUyIgLCJhdWQiIDogImh0dHBzOi8vY2FwaS5kYnMuY29tL2FjY2VzcyIgLCJqdGkiIDogIjE3NjA2Mzc5Nzg0OTc0ODQyNjYiICwiY2luIiA6ICJRMGxPTURBd01EQXgifQ.MxGbPq1zEyp65l0lKNHQNhmcMQatkqglkUtTrzj5llY","partyId":"SVcwMzY="}
# response = requests.get("https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=db0cf142-5b91-440c-9940-8d182c74ce63&redirect_uri=https%3A%2F%2Fwww.dbs.com%2Fdevelopers%2F%23%2Fall-products%2Fplay-ground&scope=Read&response_type=code&state=0399")
# print(response)

response = requests.get("https://www.dbs.com/referenceData/commonCodes")
print(response.content)