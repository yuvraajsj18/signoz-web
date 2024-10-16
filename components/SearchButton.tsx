import siteMetadata from '@/data/siteMetadata'
import { TrieveModalSearch, TrieveSDK } from 'trieve-search-component'
import 'trieve-search-component/dist/index.css'

const trieve = new TrieveSDK({
  apiKey: 'tr-UPjrAOp35kGrJWM1IvODj4zVWTdGgQxI',
  datasetId: '4650e231-7857-45aa-beb1-cb52006a2460',
})

const SearchButton = () => {
  if (siteMetadata.search) {
    return (
      <TrieveModalSearch
        theme="dark"
        trieve={trieve}
        openKeyCombination={[
          {
            key: '/',
          },
        ]}
        ButtonEl={() => (
          <div className="-mt-1 flex min-h-8 items-center justify-between rounded-full sm:bg-signoz_slate-500 pl-4 pr-0 sm:pr-4 pt-1 pb-0 sm:pb-1">
            <div className="mr-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span className="hidden sm:inline text-sm text-signoz_vanilla-400">Search...</span>
            </div>
            <div className="hidden sm:flex h-5 w-5 items-center justify-center rounded-sm border-1.5 border-b-2 border-signoz_ink-200 text-[10px] font-bold">
              /
            </div>
          </div>
        )}
      />
    )
  }
}

export default SearchButton
