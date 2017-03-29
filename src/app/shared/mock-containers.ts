
// export const CONTAINERS = [
//    {label:'Select Container', value:null},
//    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
//    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
//    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
//    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
// ]

export const CONTAINERS =
  {
  "ValidationResultsDTO": null,
  "ContainerDTO": {
    "ContainerDisplayName": "TST001 | PA99 | CIP",
    "ContainerKey": 50,
    "ContainerName": "TST001",
    "ContainerTypeKey": 1,
    "PlantAreaKey": 8,
    "MaxQuantity": 0,
    "CurrentStatus": "",
    "DefaultBatchName": "",
    "ContainerNumber": 0,
    "PlantAreaName": "PA99",
    "ContainerTypeName": "CIP",
    "SeedNumber": 0,
    "CreateCount": 0,
    "Methods": [
      {
        "Id": 11,
        "MethodTypeId": 8,
        "UnitId": 50,
        "DestinationUnitId": null,
        "MethodName": "CreateIQSBatch11",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 21,
              "ValueConfigId": 21,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 21,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 22,
              "ValueConfigId": 22,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 21,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 23,
              "ValueConfigId": 23,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 21,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 5,
            "AttributeTypeName": "Process",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 12,
        "MethodTypeId": 12,
        "UnitId": 50,
        "DestinationUnitId": null,
        "MethodName": "CreateIQSTimeSinceLastCIP12",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 24,
              "ValueConfigId": 24,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 21,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 31,
            "AttributeTypeName": "CIP Unit Id 2",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 32,
            "AttributeTypeName": "CIP Unit Id 3",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 33,
            "AttributeTypeName": "CIP Unit Id 4",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 34,
            "AttributeTypeName": "CIP Unit Id 5",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 265,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 56,
        "MethodName": "CreateIQSMovement265",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 583,
              "ValueConfigId": 583,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 399,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov1",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 400,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov1",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 584,
              "ValueConfigId": 584,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 399,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov1",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 400,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov1",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 585,
              "ValueConfigId": 585,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 399,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov1",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 266,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 57,
        "MethodName": "CreateIQSMovement266",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 587,
              "ValueConfigId": 587,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 401,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov2",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 402,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov2",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 588,
              "ValueConfigId": 588,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 401,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov2",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 402,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov2",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 589,
              "ValueConfigId": 589,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 401,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov2",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 267,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 58,
        "MethodName": "CreateIQSMovement267",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 591,
              "ValueConfigId": 591,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 403,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov3",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 404,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov3",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 592,
              "ValueConfigId": 592,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 403,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov3",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 404,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov3",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 593,
              "ValueConfigId": 593,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 403,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov3",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 268,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 59,
        "MethodName": "CreateIQSMovement268",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 595,
              "ValueConfigId": 595,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 405,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov4",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 406,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov4",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 596,
              "ValueConfigId": 596,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 405,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov4",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 406,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov4",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 597,
              "ValueConfigId": 597,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 405,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov4",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 269,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 60,
        "MethodName": "CreateIQSMovement269",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 599,
              "ValueConfigId": 599,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 407,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov5",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 408,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov5",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 600,
              "ValueConfigId": 600,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 407,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov5",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 408,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov5",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 601,
              "ValueConfigId": 601,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 407,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov5",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 270,
        "MethodTypeId": 10,
        "UnitId": 50,
        "DestinationUnitId": 61,
        "MethodName": "CreateIQSMovement270",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 603,
              "ValueConfigId": 603,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 409,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov6",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 410,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov6",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 604,
              "ValueConfigId": 604,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 409,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov6",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 410,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov6",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 4,
            "AttributeTypeName": "Product",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 605,
              "ValueConfigId": 605,
              "AttributeTypeId": 4,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 409,
                    "Tag": {
                      "Name": "Trg_INT0101_Mov6",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "-1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": null,
                "Tag": {
                  "Name": "PLC1_Program11_SEL2",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 525,
        "MethodTypeId": 9,
        "UnitId": 50,
        "DestinationUnitId": 1,
        "MethodName": "CreateIQSEvents525",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 1718,
              "ValueConfigId": 1718,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 1719,
              "ValueConfigId": 1719,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 1720,
              "ValueConfigId": 1720,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 963,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 9,
                    "Condition": {
                      "Id": 9,
                      "Name": "change of value of at least"
                    },
                    "Value": "1",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 13,
            "AttributeTypeName": "Creation Delay\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 744,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 1,
        "MethodName": "CreateIQSAttributes744",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 2061,
              "ValueConfigId": 2061,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1075,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 2062,
              "ValueConfigId": 2062,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1075,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 2063,
              "ValueConfigId": 2064,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 32,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1075,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "NoTag",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "Batch",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 2064,
              "ValueConfigId": 2065,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 22,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1074,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": 30
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1075,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_RUN",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 2065,
              "ValueConfigId": 2063,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 22,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1075,
                    "Tag": {
                      "Name": "Trg_INT0101_Proc",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": "mesHisTime",
                      "ValueField": "mesHisValue",
                      "Description": null,
                      "TagAliases": []
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "0",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "16",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1219,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 2,
        "MethodName": "CreateIQSAttributes1219",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3549,
              "ValueConfigId": 3532,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 20,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "IntakeBay1_Tanker_ID",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3550,
              "ValueConfigId": 3530,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "103",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1220,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 3,
        "MethodName": "CreateIQSAttributes1220",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3551,
              "ValueConfigId": 3534,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 20,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "IntakeBay1_Expected_Qty",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3552,
              "ValueConfigId": 3533,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "108",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1221,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 4,
        "MethodName": "CreateIQSAttributes1221",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3553,
              "ValueConfigId": 3535,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1735,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1736,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3554,
              "ValueConfigId": 3536,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1735,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1736,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3555,
              "ValueConfigId": 3538,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1735,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1736,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3556,
              "ValueConfigId": 3539,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 2,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1735,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1736,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "INT0101DT01",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3557,
              "ValueConfigId": 3537,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1735,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1736,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "60",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "109",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1222,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 5,
        "MethodName": "CreateIQSAttributes1222",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3558,
              "ValueConfigId": 3541,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 2,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "INT0101DT01",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3559,
              "ValueConfigId": 3540,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "109",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1223,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 6,
        "MethodName": "CreateIQSAttributes1223",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3572,
              "ValueConfigId": 3558,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 20,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "IntakeBay1_Load_ID",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3573,
              "ValueConfigId": 3557,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "110",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1224,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 7,
        "MethodName": "CreateIQSAttributes1224",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3574,
              "ValueConfigId": 3560,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 2,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "INT0101TT01",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3575,
              "ValueConfigId": 3559,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "111",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 1225,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 8,
        "MethodName": "CreateIQSAttributes1225",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": {
              "Id": 3546,
              "ValueConfigId": 3528,
              "AttributeTypeId": 6,
              "ValueConfig": {
                "CalculationTypeId": 16,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3547,
              "ValueConfigId": 3529,
              "AttributeTypeId": 7,
              "ValueConfig": {
                "CalculationTypeId": 9,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3548,
              "ValueConfigId": 3531,
              "AttributeTypeId": 8,
              "ValueConfig": {
                "CalculationTypeId": 29,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "PLC1_Program11_STEP",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": [
                    {
                      "ValueFromTag": "4000",
                      "Alias": "Running Complete"
                    },
                    {
                      "ValueFromTag": "6000",
                      "Alias": "Restarting"
                    },
                    {
                      "ValueFromTag": "7000",
                      "Alias": "Aborted"
                    },
                    {
                      "ValueFromTag": "8000",
                      "Alias": "Held"
                    }
                  ]
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3576,
              "ValueConfigId": 3562,
              "AttributeTypeId": 12,
              "ValueConfig": {
                "CalculationTypeId": 2,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": {
                  "Name": "WPA0101TT02",
                  "Source": "DSN=MES01_IP21_ODBC",
                  "TimeField": null,
                  "ValueField": null,
                  "Description": null,
                  "TagAliases": []
                },
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": null,
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": {
              "Id": 3577,
              "ValueConfigId": 3561,
              "AttributeTypeId": 14,
              "ValueConfig": {
                "CalculationTypeId": 4,
                "StartTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1733,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 4,
                    "Condition": {
                      "Id": 4,
                      "Name": "="
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "EndTimeConfig": {
                  "TimeConfigTypeId": 7,
                  "PeriodicTimeDefinition": null,
                  "TimeFromTagDefinition": {
                    "Id": 1734,
                    "Tag": {
                      "Name": "PLC1_Program11_STEP",
                      "Source": "DSN=MES01_IP21_ODBC",
                      "TimeField": null,
                      "ValueField": null,
                      "Description": null,
                      "TagAliases": [
                        {
                          "ValueFromTag": "4000",
                          "Alias": "Running Complete"
                        },
                        {
                          "ValueFromTag": "6000",
                          "Alias": "Restarting"
                        },
                        {
                          "ValueFromTag": "7000",
                          "Alias": "Aborted"
                        },
                        {
                          "ValueFromTag": "8000",
                          "Alias": "Held"
                        }
                      ]
                    },
                    "ConditionId": 3,
                    "Condition": {
                      "Id": 3,
                      "Name": "<>"
                    },
                    "Value": "65",
                    "OptionalSecondValue": null,
                    "OffsetInSeconds": null
                  },
                  "TimeFromSqlQuery": null,
                  "TimeFromFileDefinition": null
                },
                "Tag": null,
                "SqlQuery": null,
                "ValueFromFileDefinition": null,
                "InterpolateHistory": null,
                "DefaultValue": "112",
                "ReadValueAfter": null,
                "LocalBehaviour": null,
                "MultiplyBy": null
              },
              "InstanceNo": 1,
              "LastProcessedTime": null,
              "LastValue": null
            }
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      },
      {
        "Id": 2864,
        "MethodTypeId": 11,
        "UnitId": 50,
        "DestinationUnitId": 9,
        "MethodName": "CreateIQSAttributes2864",
        "LastExecutionTime": null,
        "AllowableAttributes": [
          {
            "AttributeTypeId": 6,
            "AttributeTypeName": "Start Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 1,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 7,
            "AttributeTypeName": "End Time",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 8,
            "AttributeTypeName": "\r\nEvent Name\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 12,
            "AttributeTypeName": "Value",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 14,
            "AttributeTypeName": "\r\nAttribute Property Key\r\n",
            "AttributeTypeDescription": null,
            "IsRequired": 1,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 17,
            "AttributeTypeName": "s Manual",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 18,
            "AttributeTypeName": "LL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 19,
            "AttributeTypeName": "OL",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 20,
            "AttributeTypeName": "Target",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 21,
            "AttributeTypeName": "OH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          },
          {
            "AttributeTypeId": 22,
            "AttributeTypeName": "HH",
            "AttributeTypeDescription": null,
            "IsRequired": 0,
            "IsMaster": 0,
            "AttributeAndValue": null
          }
        ]
      }
    ]
  }
}