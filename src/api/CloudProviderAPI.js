class CloudProviderAPI{
    baseUrl = 'https://api.euw2.pure.cloud'
    static token = '48priXnDslGbluhbk3qgEH-l10MtcjhiiQAgSWSeXVr4ltUPlHxdO_8WDh8IAd66nHyZamHMFDBH9_VD_F6TXA'

    constructor(){
    }
  
    async makeRequest(endpoint, method = 'GET', data = null, token = true) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${CloudProviderAPI.token}` : ''
        
      }
  
      const requestOptions = {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
      }
  
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, requestOptions)
        const responseData = await response.json()
        return responseData
      } catch (error) {
        console.error('API request failed:', error)
        throw error
      }
    }
  
    async getUsers (){
      const response = await this.makeRequest('api/v2/users')
      return response
    }
  
    async getUserActivityOverTime (userData){
      const response = this.makeRequest('api/v2/analytics/users/aggregates/query', 'POST', userData)
      return response
    }
  
    async updateUser (userId, userData){
      return this.makeRequest(`users/${userId}`, 'PUT', userData)
    }
  
    async deleteUser (userId){
      return this.makeRequest(`users/${userId}`, 'DELETE')
    }
  }
  
  export default CloudProviderAPI