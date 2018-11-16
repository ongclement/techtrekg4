import heuristics
import json
import tornado

class py_back(tornado.web.RequestHandler):

  def get(self):
    conv_to_data = give_user_info(self.request.arguments)
    o_data = ParseData()
    output_json = return_output_data(o_data)


  def give_user_info(json_data):
    loaded_data = json.loads(json_data)
    parsed_data = heuristics.InputData()
    parsed_data.salary = loaded_data['salary']
    parsed_data.familySize = loaded_data['familySize']\
    parsed_data.investmentGoal = loaded_data['investmentGoal']
    return parsed_data
  
  def return_output_data(data):
    output_data = {}
    output_data['plan'] = data.plan
    output_data['investment'] = data.investment
    output_data['savings'] = data.emergency
    output_data['disposable'] = data.disposable\
    output_json = json.dumps(output_data)
  

# ff = {}
# ff['salary']= 'gg1'
# ff['familySize']= 'gg2'
# ff['fcontribution'] = 'gg3'
# ff['presentSavings'] = 'gg4'
# ff['investmentGoal'] = 'gg5'
# 
# json_dat = json.dumps(ff);
# result = give_user_info(json_dat)
# 
# print(result.salary)
# print(result.familySize)
# print(result.fcontribution)
# print(result.presentSavings)
# print(result.investmentGoal)
# 
# calculated = heuristics.OutputData()
# calculated.plan = 'plan1'
# calculated.investment = '99 per month'
# calculated.emergency = '77 per month'
# calculated.disposable = 'xx per month'
# calculated.repayment = 'yy per month'
# output = return_output_data(calculated)
# print(output)