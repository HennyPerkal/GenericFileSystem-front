export class ImportDataSource {
    importDataSourceId: number | null = null;
    importDataSourceDesc: string | null = null;
    systemTypeId: number | null = null;
    jobName: string | null = null;
    urlFile: string = '';
    urlFileAfterProcess: string = '';
    endDate: Date | null = null;
    email: string | null = null;
    dataSourceTypeId: number = 0;
    insertDate: Date = new Date();
    startDate: Date | null = null;
    tableName: string | null = null;
  }
  