import { assertNever } from "../../pure/helpers-pure";
import {
  VariantAnalysisScannedRepositoryState,
  VariantAnalysisScannedRepositoryDownloadStatus,
} from "../shared/variant-analysis";
import {
  VariantAnalysisScannedRepositoryStateDto,
  VariantAnalysisScannedRepositoryDownloadDto,
} from "./repo-states-dto";

export function mapRepoStateToDomainModel(
  repoState: VariantAnalysisScannedRepositoryStateDto,
): VariantAnalysisScannedRepositoryState {
  return {
    repositoryId: repoState.repositoryId,
    downloadStatus: mapDownloadStatusToDomainModel(repoState.downloadStatus),
    downloadPercentage: repoState.downloadPercentage,
  };
}

function mapDownloadStatusToDomainModel(
  downloadedStatus: VariantAnalysisScannedRepositoryDownloadDto,
) {
  switch (downloadedStatus) {
    case VariantAnalysisScannedRepositoryDownloadDto.Pending:
      return VariantAnalysisScannedRepositoryDownloadStatus.Pending;
    case VariantAnalysisScannedRepositoryDownloadDto.InProgress:
      return VariantAnalysisScannedRepositoryDownloadStatus.InProgress;
    case VariantAnalysisScannedRepositoryDownloadDto.Succeeded:
      return VariantAnalysisScannedRepositoryDownloadStatus.Succeeded;
    case VariantAnalysisScannedRepositoryDownloadDto.Failed:
      return VariantAnalysisScannedRepositoryDownloadStatus.Failed;
    default:
      assertNever(downloadedStatus);
  }
}
