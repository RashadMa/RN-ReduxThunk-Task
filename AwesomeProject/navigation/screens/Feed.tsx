import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, StateType } from '../../redux'
import { getPosts, likePost } from '../../redux/slices/postSlice'

const Feed = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error, posts } = useSelector((state: StateType) => state.postSlice)
  useEffect(() => {
    dispatch(getPosts())
  }, [])


const likeHandler =(id:string)=>{
  const payload={
    postId: id,
    userId:"641c22c06b56837f6392fe4a",
  }
  
  dispatch(likePost(payload))
}
  const renderItem = ({ item }: any) => {
    return (
      <View style={{ margin: 10, padding: 10, borderRadius: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <>
              <Image
                style={{ height: 32, width: 32, borderRadius: 50, marginRight: 10 }}
                source={{
                  uri: item.author.profilePicture,
                }}
              />
            </>
            <View style={{ marginBottom: 25 }}>
              <Text style={{ color: "#ECEBED", fontWeight: "700", fontSize: 14 }}>
                {item.author.username}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "400", color: "#727477" }}>
                20 m ago
              </Text>
            </View>

          </View>
          <Text style={{ color: "#fff" }}>3 dots</Text>
        </View>
        <View>
          <Text style={{ color: "#ECEBED", }}>{item.content}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => likeHandler(item._id)}>
              <Text style={{ color: "#ECEBED" }}>{item.likes.length} likes </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "#ECEBED" }}>
                {item.comments.length} comments
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#181A1C", flex: 1 }}>
      <View style={styles.headerWrapper}>
        <Text style={styles.gmUser}>Good Morning, Alex.</Text>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          loading == 'pending' ? <ActivityIndicator /> :
            <>
              <FlatList
                data={posts}
                renderItem={renderItem}
              />
              {
                error &&
                <Text>{error}</Text>
              }
            </>
        }
      </View>
    </SafeAreaView>
  )
}

export default Feed

const styles = StyleSheet.create({
  gmUser: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15
  }
})