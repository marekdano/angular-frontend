
// export const CONTAINERS = [
//    {label:'Select Container', value:null},
//    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
//    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
//    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
//    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
// ]

export const CONTAINERS =
  {
  "ContainerDTOs": [
    {
      "ContainerKey": 50,
      "ContainerName": "TST4",
      "ContainerTypeKey": 2,
      "PlantAreaKey": 4,
      "MaxQuantity": 0,
      "CurrentStatus": "",
      "DefaultBatchName": "",
      "ContainerNumber": 0,
      "PlantAreaName": "Pasteurisation",
      "ContainerTypeName": "Process",
      "Methods": [
        {
          "Id": 12,
          "MethodTypeId": 12,
          "MethodTypeName": "CreateIQSTimeSinceLastCIP",
          "MethodTypeDesc": null,
          "UnitId": 50,
          "DestinationUnitId": null,
          "MethodType": null,
          "MethodName": "CreateIQSTimeSinceLastCIP12",
          "LastExecutionTime": null,
          "MethodAttributeSets": [
            {
              "MethodConfigId": 12,
              "AttributeAndValueId": 24,
              "AttributeAndValue": {
                "Id": 24,
                "ValueConfigId": 24,
                "AttributeId": 6,
                "AttributeName": null,
                "ValueConfig": {
                  "Id": 24,
                  "CalculationTypeId": 16,
                  "CalculationType": "Start Time",
                  "StartTimeConfig": {
                    "Id": 21,
                    "TimeConfigTypeId": 7,
                    "TimeConfigType": {
                      "Id": 7,
                      "Name": "tag triggered",
                      "Description": null
                    },
                    "PeriodicTimeDefinitionId": null,
                    "PeriodicTimeDefinition": null,
                    "TimeFromTagDefinition": {
                      "Id": 21,
                      "TagId": 12,
                      "Tag": {
                        "Id": 12,
                        "Name": "Trg_INT0101_Proc",
                        "Source": "DSN=MES01_IP21_ODBC",
                        "TimeField": "mesHisTime",
                        "ValueField": "mesHisValue",
                        "Description": null
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
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": null
            },
            {
              "MethodConfigId": 12,
              "AttributeAndValueId": 25,
              "AttributeAndValue": {
                "Id": 25,
                "ValueConfigId": 25,
                "AttributeId": 30,
                "AttributeName": null,
                "ValueConfig": {
                  "Id": 25,
                  "CalculationTypeId": 4,
                  "CalculationType": "Default Value",
                  "StartTimeConfig": {
                    "Id": 21,
                    "TimeConfigTypeId": 7,
                    "TimeConfigType": {
                      "Id": 7,
                      "Name": "tag triggered",
                      "Description": null
                    },
                    "PeriodicTimeDefinitionId": null,
                    "PeriodicTimeDefinition": null,
                    "TimeFromTagDefinition": {
                      "Id": 21,
                      "TagId": 12,
                      "Tag": {
                        "Id": 12,
                        "Name": "Trg_INT0101_Proc",
                        "Source": "DSN=MES01_IP21_ODBC",
                        "TimeField": "mesHisTime",
                        "ValueField": "mesHisValue",
                        "Description": null
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
                  "DefaultValue": "125",
                  "ReadValueAfter": null,
                  "LocalBehaviour": null,
                  "MultiplyBy": null
                },
                "InstanceNo": 1,
                "LastProcessedTime": null,
                "LastValue": null
              },
              "IsRequired": true,
              "IsMaster": false,
              "OrderIndex": null
            }
          ]
        }
      ]
    },
    {
      "ContainerKey": 1,
      "ContainerName": "container name 1",
      "ContainerTypeKey": 3,
      "PlantAreaKey": 4,
      "MaxQuantity": 5.1,
      "CurrentStatus": "sample string 6",
      "DefaultBatchName": "sample string 7",
      "ContainerNumber": 8,
      "PlantAreaName": "sample string 9",
      "ContainerTypeName": "sample string 10",
      "Methods": [
        {
          "Id": 1,
          "MethodTypeId": 2,
          "MethodTypeName": "sample string 3",
          "MethodTypeDesc": "sample string 4",
          "UnitId": 5,
          "DestinationUnitId": 1,
          "MethodType": "sample string 6",
          "MethodName": "method name 2",
          "LastExecutionTime": "2017-01-12T09:35:28.8724993+00:00",
          "MethodAttributeSets": [
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            },
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            }
          ]
        },
        {
          "Id": 2,
          "MethodTypeId": 3,
          "MethodTypeName": "sample string 3",
          "MethodTypeDesc": "sample string 4",
          "UnitId": 5,
          "DestinationUnitId": 1,
          "MethodType": "sample string 6",
          "MethodName": "method name 3",
          "LastExecutionTime": "2017-01-12T09:35:28.8724993+00:00",
          "MethodAttributeSets": [
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            },
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            }
          ]
        }
      ]
    },
    {
      "ContainerKey": 2,
      "ContainerName": "container name 2",
      "ContainerTypeKey": 3,
      "PlantAreaKey": 4,
      "MaxQuantity": 5.1,
      "CurrentStatus": "sample string 6",
      "DefaultBatchName": "sample string 7",
      "ContainerNumber": 8,
      "PlantAreaName": "sample string 9",
      "ContainerTypeName": "sample string 10",
      "Methods": [
        {
          "Id": 1,
          "MethodTypeId": 2,
          "MethodTypeName": "sample string 3",
          "MethodTypeDesc": "sample string 4",
          "UnitId": 5,
          "DestinationUnitId": 1,
          "MethodType": "sample string 6",
          "MethodName": "sample string 7",
          "LastExecutionTime": "2017-01-12T09:35:28.8724993+00:00",
          "MethodAttributeSets": [
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            },
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            }
          ]
        },
        {
          "Id": 1,
          "MethodTypeId": 4,
          "MethodTypeName": "sample string 3",
          "MethodTypeDesc": "sample string 4",
          "UnitId": 5,
          "DestinationUnitId": 1,
          "MethodType": "sample string 6",
          "MethodName": "method name 4",
          "LastExecutionTime": "2017-01-12T09:35:28.8724993+00:00",
          "MethodAttributeSets": [
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            },
            {
              "AttributeAndValue": {
                "AttributeId": 1,
                "AttributeName": "sample string 2",
                "ValueConfig": {
                  "CalculationTypeId": 1,
                  "CalculationType": "sample string 2",
                  "StartTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "EndTimeConfig": {
                    "TimeConfigTypeId": 1,
                    "PeriodicTimeDefinition": {
                      "FrequencyId": 1,
                      "OffsetInSeconds": 1.1,
                      "ResetTimeUnitId": 1
                    },
                    "TimeFromTagDefinition": {
                      "Id": 1,
                      "TagId": 2,
                      "Tag": {
                        "Name": "sample string 1",
                        "Source": "sample string 2",
                        "TimeField": "sample string 3",
                        "ValueField": "sample string 4",
                        "Description": "sample string 5",
                        "TagAliases": [
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          },
                          {
                            "ValueFromTag": "sample string 1",
                            "Alias": "sample string 2"
                          }
                        ]
                      },
                      "ConditionId": 1,
                      "Condition": {
                        "Id": 1,
                        "Name": "sample string 2"
                      },
                      "Value": "sample string 3",
                      "OptionalSecondValue": "sample string 4",
                      "OffsetInSeconds": 1.1
                    },
                    "TimeFromSqlQuery": {
                      "Id": 1,
                      "Query": "sample string 2",
                      "QueryTypeId": 3,
                      "QueryType": {
                        "Id": 1,
                        "Type": "sample string 2",
                        "ConnectionString": "sample string 3",
                        "IsStoredProcedure": true
                      },
                      "Parameters": "sample string 4"
                    },
                    "TimeFromFileDefinition": {
                      "Id": 1,
                      "FileSource": {
                        "FileFullName": "sample string 1",
                        "FileType": 1,
                        "ColumnNamesInFirstRow": true,
                        "Tab": "sample string 3",
                        "IsTabIndex": true
                      },
                      "DateColumn": "sample string 2",
                      "TimeColumn": "sample string 3",
                      "AreColumnsIndexes": true,
                      "OffsetInSeconds": 5.1,
                      "FilterByColumn": {
                        "FilterColumn": "sample string 1",
                        "FilterValue": "sample string 2",
                        "IsFilterColumnIndex": true,
                        "ConditionId": 4,
                        "OptionalSecondFilterValue": "sample string 5"
                      }
                    }
                  },
                  "Tag": {
                    "Name": "sample string 1",
                    "Source": "sample string 2",
                    "TimeField": "sample string 3",
                    "ValueField": "sample string 4",
                    "Description": "sample string 5",
                    "TagAliases": [
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      },
                      {
                        "ValueFromTag": "sample string 1",
                        "Alias": "sample string 2"
                      }
                    ]
                  },
                  "SqlQuery": {
                    "Id": 1,
                    "Query": "sample string 2",
                    "QueryTypeId": 3,
                    "QueryType": {
                      "Id": 1,
                      "Type": "sample string 2",
                      "ConnectionString": "sample string 3",
                      "IsStoredProcedure": true
                    },
                    "Parameters": "sample string 4"
                  },
                  "ValueFromFileDefinition": {
                    "Id": 1,
                    "FileSource": {
                      "FileFullName": "sample string 1",
                      "FileType": 1,
                      "ColumnNamesInFirstRow": true,
                      "Tab": "sample string 3",
                      "IsTabIndex": true
                    },
                    "ColumnValue": "sample string 2",
                    "IsColumnValueIndex": true,
                    "FilterByColumn": {
                      "FilterColumn": "sample string 1",
                      "FilterValue": "sample string 2",
                      "IsFilterColumnIndex": true,
                      "ConditionId": 4,
                      "OptionalSecondFilterValue": "sample string 5"
                    }
                  },
                  "InterpolateHistory": true,
                  "DefaultValue": "sample string 3",
                  "ReadValueAfter": true,
                  "LocalBehaviour": true,
                  "MultiplyBy": 1.1
                },
                "InstanceNo": 1,
                "LastProcessedTime": "2017-01-12T09:35:28.8724993+00:00",
                "LastValue": "sample string 3"
              },
              "IsRequired": true,
              "IsMaster": true,
              "OrderIndex": 1
            }
          ]
        }
      ]
    }
  ]
}
