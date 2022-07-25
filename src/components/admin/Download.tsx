import { IAdmin } from '@src/types/models/user';
import React from 'react';
import styled from 'styled-components';

interface DownloadProps {
  data: IAdmin[];
}

export default function Download({ data }: DownloadProps) {
  const download = (csvData: string) => {
    const blob = new Blob([`\ufeff${csvData}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.setAttribute('href', url);
    link.setAttribute('download', 'download.csv');
    link.click();
  };

  const changeFormatCsvData = (data: IAdmin[]) => {
    const row: string[] = [];
    const header = Object.keys(data[0]);
    row.push(header.join(','));

    data.map(item => {
      const value = Object.values(item);
      value[8] = `"${value[8].join(',')}"`;
      row.push(value.join(','));
    });

    return row.join('\n');
  };

  const getData = () => {
    const csvData = changeFormatCsvData(data);
    download(csvData);
  };

  return <DownloadButton onClick={getData}>엑셀 다운로드</DownloadButton>;
}

const DownloadButton = styled.button`
  width: 180px;
  height: 50px;
  background: ${({ theme }) => theme.color.grey_04};
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
