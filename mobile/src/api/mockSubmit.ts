import type { ReportPayload, SubmitReportResponse } from '../types';

let reportCounter = 0;

export async function submitReport(payload: ReportPayload): Promise<SubmitReportResponse> {
  reportCounter += 1;
  const reportId = `BB-2026-${String(reportCounter).padStart(3, '0')}`;

  // Simulate network latency for demo realism
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log('[Bio Buddies mock submit]', {
    reportId,
    userId: payload.userId,
    tag: payload.tag,
    remarks: payload.remarks ?? null,
    latitude: payload.latitude ?? null,
    longitude: payload.longitude ?? null,
    locationSource: payload.locationSource,
    timestamp: payload.timestamp,
    imageBase64Length: payload.imageBase64.length,
  });

  return { success: true, reportId };
}
