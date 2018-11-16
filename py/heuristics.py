class InputData:
  salary        = None
  familySize    = None
  investmentGoal = None

class OutputData:
  plan = None
  investment = None
  disposable = None
  savings = None

def ParseData(data):
  # get PCI
  pci = data.salary / data.familySize

  # minimum savings (20%)
  minimum_savings = 0.2 * data.salary
  need_to_save    = minimum_savings

  # find optimal plan
  o_data = OutputData()
  o_data.plan = GetOptimalPlan(pci)
  o_data.investment = float(GetInvestment(data.investmentGoal))
  o_data.savings = float(need_to_save)
  o_data.disposable = float(data.salary - o_data.savings - o_data.investment)
  return o_data

def GetOptimalPlan(pci):
  return "HLXXXXX"

def GetInvestment(investment):
  return (investment / 5) / 12